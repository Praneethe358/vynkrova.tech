'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, useSpring } from 'framer-motion';

/* ─── Animated counter hook ─── */
function useAnimatedCounter(target: number, duration = 2000, inView: boolean) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    let start = 0;
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, [inView, target, duration]);

  return count;
}

/* ─── Animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ─── Feature card data ─── */
const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4v1a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
        <path d="M8 14s-4 2-4 6v1h16v-1c0-4-4-6-4-6" />
        <circle cx="12" cy="6" r="1" fill="currentColor" />
        <path d="M9 18l3-3 3 3" />
      </svg>
    ),
    title: 'AI Automation',
    description:
      'Intelligent systems that learn, adapt, and automate repetitive business processes — from data pipelines to decision engines.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8l3 3-3 3M13 14h4" />
      </svg>
    ),
    title: 'Full Stack Development',
    description:
      'End-to-end engineering — modern frontends, robust APIs, cloud infrastructure, and everything in between.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4z" />
        <path d="M17 14v3h-3M17 17l-4-4" />
        <circle cx="17" cy="20" r="1" fill="currentColor" />
      </svg>
    ),
    title: 'Intelligent Workflows',
    description:
      'Streamlined operational pipelines that connect tools, APIs, and AI models into seamless automated workflows.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Scalable Architecture',
    description:
      'Systems engineered for growth — microservices, containerized deployments, and infrastructure that scales with demand.',
  },
];

/* ─── Delivery checklist ─── */
const deliverables = [
  'AI-powered workflow systems',
  'Business process automation',
  'Responsive web applications',
  'API integrations & microservices',
  'Analytics dashboard systems',
  'Deployment & optimization',
];

/* ─── Metrics ─── */
const metrics = [
  { value: 30, suffix: '+', label: 'Projects Completed' },
  { value: 15, suffix: '+', label: 'Technologies Used' },
  { value: 12, suffix: '+', label: 'Automation Systems Built' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
];


/* ─── Metric Counter Component ─── */
function MetricItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const count = useAnimatedCounter(value, 2200, isInView);

  return (
    <motion.div
      ref={ref}
      className="ov-metric"
      variants={cardVariant}
    >
      <span className="ov-metric-value">
        {count}
        <span className="ov-metric-suffix">{suffix}</span>
      </span>
      <span className="ov-metric-label">{label}</span>
    </motion.div>
  );
}

/* ══════════════════════════════════════════
   OVERVIEW SECTION
══════════════════════════════════════════ */
export default function Overview() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section id="overview" className="ov-section" ref={sectionRef}>
      {/* Subtle top gradient divider */}
      <div className="ov-top-divider" aria-hidden="true" />

      {/* ─── Intro + Heading ─── */}
      <div className="ov-container">
        <div className="ov-intro-grid">
          {/* Left: text content */}
          <div className="ov-intro-text">
            <motion.span
              className="ov-label"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={0}
            >
              About
            </motion.span>

            <motion.h2
              className="ov-heading"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={0.1}
            >
              Engineering Smart Systems<br />
              That Simplify{' '}
              <span className="ov-heading-accent">Business Operations</span>
            </motion.h2>

            <motion.p
              className="ov-description"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={0.2}
            >
              I build at the intersection of design, engineering, and artificial intelligence.
              From AI-powered automation systems that eliminate manual bottlenecks to scalable
              full-stack platforms that drive growth — every solution is crafted to deliver
              measurable business impact. I specialize in transforming complex workflows into
              streamlined digital experiences, combining modern frontend engineering with
              intelligent backend architectures and cutting-edge AI integrations.
            </motion.p>

            <motion.div
              className="ov-separator"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={0.3}
            />
          </div>

        </div>
      </div>

      {/* ─── Feature Cards ─── */}
      <div className="ov-container">
        <motion.div
          className="ov-cards-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="ov-card"
              variants={cardVariant}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              <div className="ov-card-icon">{feature.icon}</div>
              <h3 className="ov-card-title">{feature.title}</h3>
              <p className="ov-card-desc">{feature.description}</p>
              <div className="ov-card-shine" aria-hidden="true" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ─── What I Deliver ─── */}
      <div className="ov-container">
        <div className="ov-deliver-grid">
          <motion.div
            className="ov-deliver-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            custom={0}
          >
            <span className="ov-label">Services</span>
            <h3 className="ov-deliver-heading">What I Deliver</h3>
            <p className="ov-deliver-sub">
              End-to-end solutions engineered for performance, reliability, and scale.
            </p>
          </motion.div>

          <motion.ul
            className="ov-checklist"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {deliverables.map((item) => (
              <motion.li key={item} className="ov-check-item" variants={cardVariant}>
                <span className="ov-check-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* ─── Metrics Strip ─── */}
      <div className="ov-metrics-strip">
        <div className="ov-container">
          <motion.div
            className="ov-metrics-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {metrics.map((m) => (
              <MetricItem key={m.label} {...m} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="ov-bottom-divider" aria-hidden="true" />
    </section>
  );
}
