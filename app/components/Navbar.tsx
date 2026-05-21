'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Insights', href: '#insights' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      {/* Top utility bar */}
      <div className="nav-utility-bar">
        <div className="nav-utility-inner">
          <a href="#services" className="nav-utility-link">AI Automation</a>
          <span className="nav-utility-divider" />
          <a href="#services" className="nav-utility-link">Fullstack Development</a>
          <span className="nav-utility-divider" />
          <a href="#services" className="nav-utility-link">Final Year Projects</a>
          <span className="nav-utility-divider" />
          <a href="#services" className="nav-utility-link">Portfolio</a>
        </div>
      </div>

      {/* Main nav */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="main-nav"
      >
        <div className="nav-inner">
          {/* Logo */}
          <a href="#home" className="nav-logo" aria-label="Vynkrova Tech Home">
            <Image
              src="/logo-icon.png"
              alt=""
              width={36}
              height={36}
              style={{ objectFit: 'contain', borderRadius: 7 }}
              priority
            />
            <span className="nav-logo-wordmark">
              <span className="nav-logo-v">V</span>
              <span className="nav-logo-name">ynkrova Tech</span>
            </span>
          </a>

          {/* Desktop links — pushed right */}
          <div className="nav-links-desktop">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </div>

          {/* Search icon */}
          <button
            className="nav-search-btn"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="nav-hamburger"
            aria-label="Toggle menu"
          >
            <motion.span animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} className="nav-ham-line" />
            <motion.span animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} className="nav-ham-line" />
            <motion.span animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="nav-ham-line" />
          </button>
        </div>

        {/* Search bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="nav-search-bar"
            >
              <input
                type="text"
                placeholder="Search..."
                className="nav-search-input"
                autoFocus
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mobile-overlay"
          >
            <div className="mobile-backdrop" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 32, stiffness: 300 }}
              className="mobile-panel"
            >
              <div className="mobile-panel-links">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.1 }}
                    onClick={() => setMobileOpen(false)}
                    className="mobile-nav-link"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
              <div className="mobile-panel-footer">
                <p>&copy; 2026 Vynkrova Tech</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
