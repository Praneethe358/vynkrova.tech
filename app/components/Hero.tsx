'use client';

import { useEffect, useRef } from 'react';
import { motion, cubicBezier } from 'framer-motion';

/* ─── Geometric wireframe canvas (tunnel vortex like Kyndryl) ─── */
function WireframeTunnel() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;
    let hoverBlend = 0;
    let mouseX = 0.72;
    let mouseY = 0.5;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleEnter = () => {
      hoverBlend = Math.min(1, hoverBlend + 0.2);
    };

    const handleLeave = () => {
      hoverBlend = Math.max(0, hoverBlend - 0.2);
    };

    const handleMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      mouseX = (event.clientX - rect.left) / rect.width;
      mouseY = (event.clientY - rect.top) / rect.height;
    };

    canvas.addEventListener('mouseenter', handleEnter);
    canvas.addEventListener('mouseleave', handleLeave);
    canvas.addEventListener('mousemove', handleMove);

    const rotateX = (p: { x: number; y: number; z: number }, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x: p.x,
        y: p.y * cos - p.z * sin,
        z: p.y * sin + p.z * cos,
      };
    };

    const rotateY = (p: { x: number; y: number; z: number }, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x: p.x * cos + p.z * sin,
        y: p.y,
        z: -p.x * sin + p.z * cos,
      };
    };

    const rotateZ = (p: { x: number; y: number; z: number }, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x: p.x * cos - p.y * sin,
        y: p.x * sin + p.y * cos,
        z: p.z,
      };
    };

    const project = (p: { x: number; y: number; z: number }, fov: number) => {
      const scale = fov / (p.z + fov);
      return {
        x: p.x * scale,
        y: p.y * scale,
        z: p.z,
        scale,
      };
    };

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const targetBlend = canvas.matches(':hover') ? 1 : 0;
      hoverBlend += (targetBlend - hoverBlend) * 0.08;

      const cx = canvas.width * 0.72;
      const cy = canvas.height * 0.48;
      const fov = 800;
      const majorRadius = 120 + hoverBlend * 20;
      const minorRadius = 45 + hoverBlend * 8;
      const segmentsU = Math.round(32 + hoverBlend * 8);
      const segmentsV = Math.round(24 + hoverBlend * 4);

      let rotX = t * 0.6 + (mouseY - 0.5) * 0.8;
      let rotY = t * 0.35 + (mouseX - 0.5) * 1.2;
      let rotZ = t * 0.15;

      const points: Array<{
        x2d: number;
        y2d: number;
        z: number;
        u: number;
        v: number;
      }> = [];

      for (let u = 0; u <= segmentsU; u++) {
        for (let v = 0; v <= segmentsV; v++) {
          const uAngle = (u / segmentsU) * Math.PI * 2;
          const vAngle = (v / segmentsV) * Math.PI * 2;

          const x = (majorRadius + minorRadius * Math.cos(vAngle)) * Math.cos(uAngle);
          const y = minorRadius * Math.sin(vAngle);
          const z = (majorRadius + minorRadius * Math.cos(vAngle)) * Math.sin(uAngle);

          let p = { x, y, z };
          p = rotateX(p, rotX);
          p = rotateY(p, rotY);
          p = rotateZ(p, rotZ);

          const proj = project(p, fov);
          points.push({
            x2d: cx + proj.x,
            y2d: cy + proj.y,
            z: proj.z,
            u,
            v,
          });
        }
      }

      // Draw U-direction lines (poloidal) with flowing animation
      ctx.strokeStyle = 'rgba(226, 35, 26, 0.6)';
      ctx.lineWidth = 0.8;
      for (let u = 0; u <= segmentsU; u += 2) {
        ctx.beginPath();
        let first = true;
        for (let v = 0; v <= segmentsV; v++) {
          const phaseShift = ((t * 60 + u * 3.2) % segmentsV);
          const idx = u * (segmentsV + 1) + ((v + Math.floor(phaseShift)) % segmentsV);
          const pt = points[idx];
          if (first) {
            ctx.moveTo(pt.x2d, pt.y2d);
            first = false;
          } else {
            ctx.lineTo(pt.x2d, pt.y2d);
          }
        }
        ctx.stroke();
      }

      // Draw V-direction lines (toroidal) with flowing animation
      for (let v = 0; v <= segmentsV; v += 2) {
        ctx.beginPath();
        let first = true;
        for (let u = 0; u <= segmentsU; u++) {
          const phaseShift = ((t * 45 + v * 2.8) % segmentsU);
          const idx = ((u + Math.floor(phaseShift)) % segmentsU) * (segmentsV + 1) + v;
          const pt = points[idx];
          if (first) {
            ctx.moveTo(pt.x2d, pt.y2d);
            first = false;
          } else {
            ctx.lineTo(pt.x2d, pt.y2d);
          }
        }
        ctx.stroke();
      }

      // Highlight glow
      ctx.fillStyle = 'rgba(226, 35, 26, 0.15)';
      ctx.beginPath();
      ctx.arc(cx, cy, majorRadius * 0.5, 0, Math.PI * 2);
      ctx.fill();

      t += 0.016 + hoverBlend * 0.008;
      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mouseenter', handleEnter);
      canvas.removeEventListener('mouseleave', handleLeave);
      canvas.removeEventListener('mousemove', handleMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero-canvas"
      aria-hidden="true"
    />
  );
}

/* ─── animation helpers ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
});

/* ─── Hero ─── */
export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Wireframe background */}
      <WireframeTunnel />

      {/* Dark vignette left side so text stays readable */}
      <div className="hero-vignette" aria-hidden="true" />

      <div className="hero-content-wrap">
        {/* Breadcrumb */}
        <motion.div {...fadeUp(0.1)} className="hero-breadcrumb">
          <span>Home</span>
          <span className="hero-breadcrumb-sep">/</span>
          <span>AI Automation Developer</span>
        </motion.div>

        {/* Heading */}
        <motion.h1 {...fadeUp(0.2)} className="hero-heading">
          Intelligent Digital<br />
          <span className="hero-heading-accent">Experiences</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p {...fadeUp(0.35)} className="hero-subheading">
          Accelerate your transformation to AI-native
        </motion.p>

        {/* CTA */}
        <motion.div {...fadeUp(0.5)} className="hero-cta-row">
          <a href="#projects" className="hero-btn-outline">
            View Projects
          </a>
          <a href="#contact" className="hero-btn-ghost">
            Book a Call
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
