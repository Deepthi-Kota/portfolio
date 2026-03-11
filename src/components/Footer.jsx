import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-[var(--color-dark-border)] bg-[var(--color-dark-surface)]">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center space-x-1"
        >
          <span className="text-xl font-bold tracking-tighter gradient-text">KD.</span>
        </motion.div>
        
        <p className="text-[var(--color-text-muted)] text-sm text-center">
          &copy; {currentYear} Kota Deepthi. All rights reserved.
        </p>

        <div className="flex space-x-4">
          <a
            href="https://github.com/kmitofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors p-2"
            aria-label="GitHub"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors p-2"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href="mailto:kotadeepthi2005@gmail.com"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors p-2"
            aria-label="Email"
          >
            <FiMail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
