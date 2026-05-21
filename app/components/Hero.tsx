'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

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

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const RED = '#e2231a';

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width * 0.72;
      const cy = canvas.height * 0.5;
      const layers = 22;
      const spokes = 28;

      for (let l = 0; l < layers; l++) {
        const progress = l / (layers - 1);
        const radius = 20 + progress * Math.min(canvas.width, canvas.height) * 0.7;
        const alpha = 0.08 + progress * 0.35;
        const offsetX = Math.sin(t * 0.4 + progress * 1.5) * 8;
        const offsetY = Math.cos(t * 0.3 + progress * 1.2) * 5;

        // Concentric ellipses
        ctx.beginPath();
        ctx.ellipse(
          cx + offsetX,
          cy + offsetY,
          radius * 0.55,
          radius * 0.42,
          -0.15,
          0,
          Math.PI * 2
        );
        ctx.strokeStyle = `rgba(226,35,26,${alpha})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();

        // Spoke lines from center to each ellipse point
        if (l % 3 === 0) {
          for (let s = 0; s < spokes; s++) {
            const angle = (s / spokes) * Math.PI * 2;
            const ex = cx + offsetX + Math.cos(angle) * radius * 0.55;
            const ey = cy + offsetY + Math.sin(angle) * radius * 0.42;

            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(ex, ey);
            ctx.strokeStyle = `rgba(226,35,26,${alpha * 0.55})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      // Bright focal point
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 60);
      grad.addColorStop(0, 'rgba(226,35,26,0.55)');
      grad.addColorStop(0.4, 'rgba(226,35,26,0.12)');
      grad.addColorStop(1, 'rgba(226,35,26,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, 60, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      t += 0.012;
      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(animId);
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
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
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
