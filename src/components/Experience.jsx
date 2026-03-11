import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Full Stack Developer Intern',
      company: 'Inncircles India',
      duration: 'July 2025 – Present',
      points: [
        'Optimized a dashboard API processing 1M+ records, reducing response time from 12 seconds to under 1 second.',
        'Built scalable backend modules using MEAN stack and NestJS framework.',
        'Integrated Microsoft OneDrive APIs for secure and efficient document storage.',
        'Implemented Redis-based locking mechanisms to ensure safe concurrent operations.',
        'Actively contributed to the design and development of microservices-based backend architectures.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative bg-[var(--color-dark-surface)] border-y border-[var(--color-dark-border)]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-[var(--color-primary)] font-mono text-xl mr-2">02.</span> 
              Where I've Worked
            </h2>
            <div className="h-px bg-[var(--color-dark-border)] flex-grow"></div>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                {/* Timeline line for mobile */}
                <div className="md:hidden absolute left-0 top-2 bottom-[-40px] w-px bg-[var(--color-dark-border)]"></div>
                
                <div className="glass-card p-8 rounded-xl border-l-[3px] border-l-[var(--color-primary)] hover:-translate-y-1 transition-transform duration-300 relative group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)] opacity-5 rounded-bl-[100px] pointer-events-none group-hover:scale-110 transition-transform"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <h3 className="text-2xl font-bold text-white">
                      {exp.role} <span className="text-[var(--color-primary)]">@ {exp.company}</span>
                    </h3>
                    <span className="text-sm font-mono text-[var(--color-accent)] bg-[var(--color-dark-bg)] px-3 py-1 rounded-full border border-[var(--color-dark-border)] w-fit">
                      {exp.duration}
                    </span>
                  </div>
                  
                  <ul className="space-y-3 mt-6">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start text-[var(--color-text-muted)] text-base">
                        <span className="text-[var(--color-primary)] mr-3 mt-1.5 text-xs">▹</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
