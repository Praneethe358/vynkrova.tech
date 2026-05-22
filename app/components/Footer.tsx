'use client';

import { motion, cubicBezier } from 'framer-motion';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay, ease: cubicBezier(0.22, 1, 0.36, 1) },
  }),
};

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  'AI Automation',
  'Chatbot Development',
  'Full Stack Web Apps',
  'Workflow Automation',
  'Computer Vision',
  'AI Consulting',
];

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/vynkrova',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Praneethe358',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
  },
  {
    label: 'Email',
    href: 'mailto:hello@vynkrova.tech',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ft-footer">
      {/* Top CTA banner */}
      <div className="ft-cta-band">
        <div className="ft-cta-glow" aria-hidden="true" />
        <div className="ft-container">
          <motion.div
            className="ft-cta-inner"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            custom={0}
          >
            <div className="ft-cta-text">
              <h3 className="ft-cta-heading">Ready to start your project?</h3>
              <p className="ft-cta-sub">Let&apos;s discuss your requirements and build something remarkable together.</p>
            </div>
            <div className="ft-cta-actions">
              <a href="#contact" className="ft-cta-btn-primary">
                Get in Touch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="mailto:hello@vynkrova.tech" className="ft-cta-btn-secondary">
                hello@vynkrova.tech
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main footer body */}
      <div className="ft-body">
        <div className="ft-container">
          <div className="ft-grid">

            {/* Brand column */}
            <motion.div
              className="ft-brand-col"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={0}
            >
              <Link href="/" className="ft-logo">
                <span className="ft-logo-v">V</span>
                <span className="ft-logo-name">ynkrova</span>
                <span className="ft-logo-suffix">.tech</span>
              </Link>
              <p className="ft-brand-desc">
                AI automation and full-stack development specialist. Building intelligent systems
                that drive measurable business outcomes and operational excellence.
              </p>
              <div className="ft-socials">
                {socials.map(s => (
                  <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="ft-social-btn" aria-label={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>
              <div className="ft-avail-badge">
                <span className="ft-avail-dot" />
                Available for new projects
              </div>
            </motion.div>

            {/* Navigation column */}
            <motion.div
              className="ft-links-col"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={0.1}
            >
              <h4 className="ft-col-heading">Navigation</h4>
              <ul className="ft-link-list">
                {navLinks.map(l => (
                  <li key={l.label}>
                    <a href={l.href} className="ft-link">{l.label}</a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services column */}
            <motion.div
              className="ft-links-col"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={0.2}
            >
              <h4 className="ft-col-heading">Services</h4>
              <ul className="ft-link-list">
                {services.map(s => (
                  <li key={s}>
                    <a href="#contact" className="ft-link">{s}</a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact column */}
            <motion.div
              className="ft-contact-col"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={0.3}
            >
              <h4 className="ft-col-heading">Contact</h4>
              <div className="ft-contact-list">
                <a href="mailto:hello@vynkrova.tech" className="ft-contact-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
                  hello@vynkrova.tech
                </a>
                <a href="https://wa.me/919876543210" className="ft-contact-item" target="_blank" rel="noopener noreferrer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                  +91 98765 43210
                </a>
                <p className="ft-contact-item ft-location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  India · Remote Worldwide
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="ft-bottom-bar">
        <div className="ft-container">
          <div className="ft-bottom-inner">
            <p className="ft-copyright">
              © {year} Vynkrova Tech. All rights reserved.
            </p>
            <p className="ft-built-with">
              Built with <span className="ft-heart">♥</span> using Next.js &amp; AI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
