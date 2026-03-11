import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', to: 'hero' },
    { title: 'About', to: 'about' },
    { title: 'Experience', to: 'experience' },
    { title: 'Projects', to: 'projects' },
    { title: 'Skills', to: 'skills' },
    { title: 'Education', to: 'education' },
    { title: 'Contact', to: 'contact' },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-card py-4 backdrop-blur-md bg-opacity-70 border-b border-[var(--color-dark-border)]' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link 
          to="hero" 
          smooth={true} 
          duration={500} 
          className="cursor-pointer text-2xl font-bold tracking-tighter gradient-text"
        >
          KD<span className="text-[var(--color-primary)]">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-[var(--color-primary)] font-medium"
              className="cursor-pointer text-[var(--color-text-muted)] hover:text-white transition-colors text-sm uppercase tracking-wider relative group"
            >
              {link.title}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-transparent border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all text-sm font-medium"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-[var(--color-text-muted)] hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full glass-card border-b border-[var(--color-dark-border)] flex flex-col px-6 py-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.to}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer py-3 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors border-b border-[var(--color-dark-border)] last:border-0"
              >
                {link.title}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-3 rounded-md bg-[var(--color-primary)] text-white text-center font-medium opacity-90 hover:opacity-100 transition-opacity"
            >
              Download Resume
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
