import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const educationList = [
    {
      id: 1,
      institution: 'Keshav Memorial Institute of Technology, Hyderabad',
      degree: 'Bachelor of Technology – Computer Science and Engineering',
      score: 'CGPA: 9.146',
      duration: '2022 – 2026'
    },
    {
      id: 2,
      institution: 'Sri Chaitanya Junior College, Hyderabad',
      degree: 'Higher Secondary School',
      score: 'Percentage: 98%',
      duration: '2020 – 2022'
    },
    {
      id: 3,
      institution: "St. Mary's High School, Asifabad",
      degree: 'Secondary School',
      score: 'GPA: 10',
      duration: '2020'
    }
  ];

  return (
    <section id="education" className="py-20 relative bg-[var(--color-dark-bg)]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold flex-shrink-0">
              <span className="text-[var(--color-primary)] font-mono text-xl mr-2">05.</span> 
              Education
            </h2>
            <div className="h-px bg-[var(--color-dark-border)] flex-grow"></div>
          </div>

          <div className="space-y-8">
            {educationList.map((edu, index) => (
              <motion.div 
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 md:p-8 rounded-xl border border-[var(--color-dark-border)] hover:border-[var(--color-primary)] transition-colors duration-300 relative overflow-hidden group"
              >
                {/* Subtle background glow effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-primary)] opacity-[0.03] rounded-bl-[100px] pointer-events-none group-hover:scale-110 transition-transform"></div>
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-3">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[var(--color-primary)] transition-colors">
                    {edu.institution}
                  </h3>
                  <span className="text-sm font-mono text-[var(--color-accent)] bg-[var(--color-dark-surface)] px-3 py-1 rounded-full border border-[var(--color-dark-border)] shrink-0">
                    {edu.duration}
                  </span>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mt-2">
                  <p className="text-lg text-[var(--color-text-main)] font-medium mb-1 sm:mb-0">
                    {edu.degree}
                  </p>
                  <p className="text-[var(--color-text-muted)] mt-1 sm:mt-0">
                    {edu.score}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
