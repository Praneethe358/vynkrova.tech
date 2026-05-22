'use client';

import { useRef, useState } from 'react';
import { motion, cubicBezier } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay, ease: cubicBezier(0.22, 1, 0.36, 1) },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: cubicBezier(0.22, 1, 0.36, 1) } },
};

const channels = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>,
    label: 'Email', value: 'hello@vynkrova.tech', href: 'mailto:hello@vynkrova.tech', note: 'Replies within 24 hours',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    label: 'WhatsApp', value: '+91 98765 43210', href: 'https://wa.me/919876543210', note: 'Mon–Fri, 9 AM–6 PM IST',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
    label: 'LinkedIn', value: 'linkedin.com/in/vynkrova', href: 'https://linkedin.com/in/vynkrova', note: 'Connect professionally',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
    label: 'GitHub', value: 'github.com/Praneethe358', href: 'https://github.com/Praneethe358', note: 'Browse open-source projects',
  },
];

const processSteps = [
  { num: '01', title: 'Discovery Call', desc: 'Free 30-min consultation to understand your goals.' },
  { num: '02', title: 'Proposal & Scope', desc: 'Detailed plan, timeline, and transparent pricing in 48 h.' },
  { num: '03', title: 'Build & Iterate', desc: 'Agile sprints with weekly demos and your feedback.' },
  { num: '04', title: 'Deploy & Support', desc: 'Production launch plus 30-day post-delivery support.' },
];

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [fields, setFields] = useState({ name: '', email: '', service: '', budget: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    await new Promise(r => setTimeout(r, 1600));
    setFormState('sent');
  };

  return (
    <section id="contact" className="ct-section">
      <div className="ct-top-divider" aria-hidden="true" />
      <div className="ct-container">

        {/* Header */}
        <div className="ct-header">
          <motion.span className="ct-label" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} custom={0}>
            Contact
          </motion.span>
          <motion.h2 className="ct-heading" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} custom={0.1}>
            Let&apos;s Build Something <span className="ct-heading-accent">Extraordinary</span>
          </motion.h2>
          <motion.p className="ct-subheading" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} custom={0.2}>
            Have a project in mind or want to explore how AI automation can transform your business?
            Let&apos;s turn your vision into reality.
          </motion.p>
        </div>

        {/* Main grid */}
        <div className="ct-main-grid">

          {/* Form */}
          <motion.div className="ct-form-wrap" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0.1}>
            {formState === 'sent' ? (
              <div className="ct-success">
                <div className="ct-success-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <h3 className="ct-success-title">Message Received!</h3>
                <p className="ct-success-sub">Thank you for reaching out. I&apos;ll get back to you within 24 hours.</p>
                <button className="ct-success-reset" onClick={() => { setFormState('idle'); setFields({ name: '', email: '', service: '', budget: '', message: '' }); }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="ct-form" noValidate>
                <div className="ct-form-header">
                  <h3 className="ct-form-title">Send a Message</h3>
                  <p className="ct-form-sub">Fields marked <span className="ct-req">*</span> are required</p>
                </div>
                <div className="ct-form-row">
                  <div className="ct-field-group">
                    <label className="ct-field-label" htmlFor="ct-name">Full Name <span className="ct-req">*</span></label>
                    <input id="ct-name" name="name" type="text" className="ct-input" placeholder="John Smith" value={fields.name} onChange={handleChange} required autoComplete="name" />
                  </div>
                  <div className="ct-field-group">
                    <label className="ct-field-label" htmlFor="ct-email">Email Address <span className="ct-req">*</span></label>
                    <input id="ct-email" name="email" type="email" className="ct-input" placeholder="john@company.com" value={fields.email} onChange={handleChange} required autoComplete="email" />
                  </div>
                </div>
                <div className="ct-form-row">
                  <div className="ct-field-group">
                    <label className="ct-field-label" htmlFor="ct-service">Service Needed <span className="ct-req">*</span></label>
                    <select id="ct-service" name="service" className="ct-select" value={fields.service} onChange={handleChange} required>
                      <option value="" disabled>Select a service…</option>
                      <option value="ai-automation">AI Automation</option>
                      <option value="chatbot">Chatbot / Virtual Agent</option>
                      <option value="fullstack">Full Stack Web App</option>
                      <option value="workflow">Workflow Automation</option>
                      <option value="computer-vision">Computer Vision</option>
                      <option value="consulting">AI Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="ct-field-group">
                    <label className="ct-field-label" htmlFor="ct-budget">Estimated Budget</label>
                    <select id="ct-budget" name="budget" className="ct-select" value={fields.budget} onChange={handleChange}>
                      <option value="" disabled>Select range…</option>
                      <option value="lt500">Under $500</option>
                      <option value="500-2k">$500 – $2,000</option>
                      <option value="2k-5k">$2,000 – $5,000</option>
                      <option value="5k-10k">$5,000 – $10,000</option>
                      <option value="gt10k">$10,000+</option>
                    </select>
                  </div>
                </div>
                <div className="ct-field-group">
                  <label className="ct-field-label" htmlFor="ct-message">Project Details <span className="ct-req">*</span></label>
                  <textarea id="ct-message" name="message" className="ct-textarea" placeholder="Tell me about your project — problem, timeline, and any technical details…" rows={5} value={fields.message} onChange={handleChange} required />
                </div>
                <button type="submit" className="ct-submit-btn" disabled={formState === 'sending'} id="ct-submit-button">
                  {formState === 'sending' ? (
                    <><span className="ct-spinner" />Sending…</>
                  ) : (
                    <>Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/></svg>
                    </>
                  )}
                </button>
                <p className="ct-privacy-note">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  Your information is private and will never be shared.
                </p>
              </form>
            )}
          </motion.div>

          {/* Info panel */}
          <div className="ct-info-panel">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
              <p className="ct-info-section-label">Reach me directly</p>
              <div className="ct-channels">
                {channels.map(ch => (
                  <motion.a key={ch.label} href={ch.href} target={ch.href.startsWith('http') ? '_blank' : undefined} rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="ct-channel-card" variants={cardAnim}>
                    <span className="ct-channel-icon">{ch.icon}</span>
                    <span className="ct-channel-body">
                      <span className="ct-channel-label">{ch.label}</span>
                      <span className="ct-channel-value">{ch.value}</span>
                      <span className="ct-channel-note">{ch.note}</span>
                    </span>
                    <svg className="ct-channel-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div className="ct-availability" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0.3}>
              <span className="ct-avail-dot" />
              <span className="ct-avail-text"><strong>Currently accepting new projects</strong> — typical start within 2 weeks</span>
            </motion.div>

            <motion.div className="ct-process" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} custom={0.4}>
              <p className="ct-info-section-label" style={{ marginBottom: '20px' }}>What to expect</p>
              {processSteps.map(step => (
                <div key={step.num} className="ct-process-step">
                  <span className="ct-process-num">{step.num}</span>
                  <div className="ct-process-body">
                    <span className="ct-process-title">{step.title}</span>
                    <span className="ct-process-desc">{step.desc}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <div className="ct-bottom-divider" aria-hidden="true" />
    </section>
  );
}
