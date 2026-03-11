import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Hero = () => {
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center pt-20 pb-12 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary)] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--color-accent)] rounded-full mix-blend-screen filter blur-[128px] opacity-20 hover:opacity-30 transition-opacity duration-700"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="max-w-4xl mx-auto flex flex-col items-center md:items-start text-center md:text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block px-4 py-1.5 rounded-full border border-[var(--color-dark-border)] glass-card"
          >
            <span className="text-[var(--color-accent)] font-medium text-sm">Full Stack Developer Intern</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
          >
            Hi, I'm <span className="gradient-text">Kota Deepthi</span>.
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl font-semibold text-[var(--color-text-muted)] mb-6 max-w-2xl"
          >
            Building scalable backend systems and AI-powered applications.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-[var(--color-text-muted)] mb-10 max-w-xl"
          >
            I specialize in the MERN and MEAN stacks, optimizing performance, and building responsive, accessible web experiences.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-8 py-3 rounded-md bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-hover)] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-violet-500/20"
            >
              Contact Me <FiArrowRight />
            </Link>
            
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-md bg-transparent border border-[var(--color-dark-border)] glass-card hover:border-[var(--color-primary)] hover:text-white transition-all text-[var(--color-text-main)] font-medium flex items-center justify-center gap-2 group"
            >
              <FiDownload className="group-hover:-translate-y-1 transition-transform" /> Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
