'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

/* ─── Animation variants (matching Overview) ─── */
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
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
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

/* ─── Project data ─── */
interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  featured?: boolean;
  challenge?: string;
  solution?: string;
  impact?: string;
  links?: { label: string; href: string }[];
}

const projects: Project[] = [
  {
    title: 'AI WhatsApp Customer Support Agent',
    category: 'AI Automation',
    description:
      'An intelligent conversational agent that handles customer inquiries, processes orders, and resolves support tickets autonomously — reducing response time by 85% and operational costs by 60%.',
    tech: ['Python', 'LangChain', 'OpenAI', 'Node.js', 'MongoDB', 'Docker'],
    image: '/project-whatsapp.png',
    featured: true,
    challenge: 'Manual support team overwhelmed with 2,000+ daily messages, leading to 4-hour average response times.',
    solution: 'Built an AI agent with contextual memory, intent classification, and seamless human handoff for complex cases.',
    impact: '85% faster response · 60% cost reduction · 24/7 availability',
    links: [
      { label: 'View Case Study', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
  },
  {
    title: 'AI Automation Dashboard',
    category: 'Workflow Automation',
    description:
      'Centralized command center for managing AI workflows, monitoring automation pipelines, and tracking real-time performance metrics across distributed systems.',
    tech: ['React', 'Next.js', 'Python', 'n8n', 'Docker', 'Kafka'],
    image: '/project-automation.png',
    featured: true,
    challenge: 'Disconnected automation tools with no visibility into pipeline health or bottleneck identification.',
    solution: 'Unified dashboard with real-time monitoring, drag-and-drop workflow builder, and intelligent alerting.',
    impact: '40% efficiency gain · 3x faster debugging · Zero downtime deployments',
    links: [
      { label: 'View Case Study', href: '#' },
      { label: 'Live Demo', href: '#' },
    ],
  },
  {
    title: 'Online Tutoring Platform',
    category: 'Full Stack',
    description:
      'Scalable ed-tech platform with live video sessions, progress tracking, course management, and integrated payment processing.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'WebRTC', 'Stripe'],
    image: '/project-tutoring.png',
  },
  {
    title: 'Gesture-Controlled Presentation System',
    category: 'Computer Vision',
    description:
      'Hands-free presentation control using real-time hand gesture recognition powered by computer vision and deep learning models.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow'],
    image: '/project-gesture.png',
  },
  {
    title: 'Banking Speech Assistance System',
    category: 'AI / NLP',
    description:
      'Voice-enabled banking assistant that processes natural language commands for transactions, balance inquiries, and account management.',
    tech: ['Python', 'OpenAI', 'FastAPI', 'React', 'PostgreSQL'],
    image: '/project-banking.png',
  },
  {
    title: 'Log Monitoring & Alerting Pipeline',
    category: 'DevOps / Backend',
    description:
      'Enterprise-grade observability pipeline for real-time log aggregation, anomaly detection, and intelligent alert routing.',
    tech: ['Python', 'Kafka', 'Elasticsearch', 'Docker', 'Grafana'],
    image: '/project-monitoring.png',
  },
];

/* ─── Featured Project Card ─── */
function FeaturedCard({ project }: { project: Project }) {
  return (
    <motion.div
      className="pj-featured-card"
      variants={cardVariant}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
    >
      {/* Image — uses fill with a fixed-ratio container */}
      <div className="pj-featured-img-wrap">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="pj-featured-img"
        />
        <div className="pj-img-overlay" />
        <span className="pj-category-badge">{project.category}</span>
      </div>

      {/* Content */}
      <div className="pj-featured-content">
        <h3 className="pj-card-title">{project.title}</h3>
        <p className="pj-card-desc">{project.description}</p>

        {/* Challenge → Solution → Impact */}
        {project.challenge && (
          <div className="pj-case-study">
            <div className="pj-case-row">
              <div className="pj-case-item">
                <span className="pj-case-label">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" /></svg>
                  Challenge
                </span>
                <p className="pj-case-text">{project.challenge}</p>
              </div>
              <div className="pj-case-item">
                <span className="pj-case-label">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
                  Solution
                </span>
                <p className="pj-case-text">{project.solution}</p>
              </div>
            </div>
            <div className="pj-case-impact-bar">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
              <span>{project.impact}</span>
            </div>
          </div>
        )}

        {/* Tech stack */}
        <div className="pj-tech-tags">
          {project.tech.map((t) => (
            <span key={t} className="pj-tech-tag">{t}</span>
          ))}
        </div>

        {/* Links */}
        {project.links && (
          <div className="pj-card-links">
            {project.links.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className={i === 0 ? 'pj-link-primary' : 'pj-link-secondary'}
              >
                {link.label}
                {i === 0 && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="pj-card-shine" aria-hidden="true" />
    </motion.div>
  );
}

/* ─── Standard Project Card ─── */
function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      className="pj-card"
      variants={cardVariant}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      {/* Image — uses fill with a fixed-ratio container */}
      <div className="pj-card-img-wrap">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="pj-card-img"
        />
        <div className="pj-img-overlay" />
        <span className="pj-category-badge">{project.category}</span>
      </div>

      {/* Content */}
      <div className="pj-card-body">
        <h3 className="pj-card-title">{project.title}</h3>
        <p className="pj-card-desc">{project.description}</p>

        <div className="pj-tech-tags">
          {project.tech.map((t) => (
            <span key={t} className="pj-tech-tag">{t}</span>
          ))}
        </div>
      </div>

      <div className="pj-card-shine" aria-hidden="true" />
    </motion.div>
  );
}

/* ══════════════════════════════════════════
   PROJECTS SECTION
══════════════════════════════════════════ */
export default function Projects() {
  const sectionRef = useRef(null);

  const featured = projects.filter((p) => p.featured);
  const standard = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="pj-section" ref={sectionRef}>
      <div className="pj-top-divider" aria-hidden="true" />

      {/* ─── Header ─── */}
      <div className="pj-container">
        <div className="pj-header">
          <motion.span
            className="pj-label"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            custom={0}
          >
            Projects
          </motion.span>

          <motion.h2
            className="pj-heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            custom={0.1}
          >
            Building Intelligent Products &{' '}
            <span className="pj-heading-accent">Automation Systems</span>
          </motion.h2>

          <motion.p
            className="pj-subheading"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            custom={0.2}
          >
            Each project represents a real-world challenge solved through AI automation,
            scalable architecture, and modern engineering — delivering measurable
            business impact and intelligent digital experiences.
          </motion.p>
        </div>
      </div>

      {/* ─── Featured Projects ─── */}
      <div className="pj-container">
        <motion.div
          className="pj-featured-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {featured.map((project) => (
            <FeaturedCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>

      {/* ─── Standard Projects Grid ─── */}
      <div className="pj-container">
        <motion.div
          className="pj-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {standard.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>

      {/* ─── Bottom CTA ─── */}
      <div className="pj-cta-strip">
        <div className="pj-cta-glow" aria-hidden="true" />
        <div className="pj-container">
          <motion.div
            className="pj-cta-content"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            custom={0}
          >
            <h3 className="pj-cta-heading">
              Looking to build an AI-powered solution<br />
              or automation system?
            </h3>
            <p className="pj-cta-sub">
              Let&apos;s discuss how intelligent automation can transform your business operations.
            </p>
            <div className="pj-cta-buttons">
              <a href="#contact" className="pj-cta-primary">
                Start a Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#contact" className="pj-cta-secondary">
                Schedule a Call
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pj-bottom-divider" aria-hidden="true" />
    </section>
  );
}
