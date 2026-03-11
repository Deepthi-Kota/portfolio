import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-12 items-center"
        >
          {/* Text Content */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-4">
              <span className="text-[var(--color-primary)] font-mono text-xl">01.</span> 
              About Me
              <div className="h-px bg-[var(--color-dark-border)] flex-grow ml-4"></div>
            </h2>
            
            <div className="text-[var(--color-text-muted)] space-y-4 text-lg">
              <p>
                Hello! I'm Kota Deepthi, a passionate <span className="text-white font-medium">Full Stack Developer Intern</span> specializing in building scalable web applications. My journey in software engineering has equipped me with strong skills in <span className="text-[var(--color-accent)]">MERN</span> and <span className="text-[var(--color-accent)]">MEAN</span> stack technologies.
              </p>
              <p>
                I am particularly interested in backend performance optimization, microservices architecture, and developing AI-powered systems. 
                Whether it's reducing API response times or integrating smart algorithms into functional platforms, I enjoy tackling complex problems with robust solutions.
              </p>
              <p>
                Currently, I am working on enhancing data processing pipelines and learning more about distributed systems.
              </p>
            </div>
          </div>

          {/* Decorative Visual/Image Placeholder */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <div className="relative group w-64 h-64">
              <div className="absolute inset-0 bg-[var(--color-primary)] mix-blend-overlay rounded-lg z-10 opacity-20 group-hover:opacity-0 transition-opacity duration-500"></div>
              <div className="absolute inset-0 border-2 border-[var(--color-primary)] rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
              <div className="w-full h-full bg-[var(--color-dark-surface)] border border-[var(--color-dark-border)] rounded-lg overflow-hidden flex items-center justify-center relative z-20">
                <span className="text-8xl font-bold text-[var(--color-dark-bg)] bg-clip-text gradient-text opacity-50 select-none">KD</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
