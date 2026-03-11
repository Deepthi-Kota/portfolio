import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const categories = [
    {
      title: 'Languages',
      skills: ['Java', 'JavaScript', 'SQL']
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'MySQL']
    },
    {
      title: 'Frameworks & Tools',
      skills: ['MERN Stack', 'MEAN Stack', 'NestJS', 'React', 'Node.js', 'Express', 'Tailwind CSS']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="py-20 relative bg-[var(--color-dark-surface)] border-y border-[var(--color-dark-border)]">
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
              <span className="text-[var(--color-primary)] font-mono text-xl mr-2">04.</span> 
              Technical Arsenal
            </h2>
            <div className="h-px bg-[var(--color-dark-border)] flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl relative overflow-hidden group hover:border-[var(--color-primary)] transition-colors"
              >
                {/* Decorative glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"></div>
                
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <span className="text-[var(--color-primary)]">&bull;</span>
                  {category.title}
                </h3>
                
                <motion.ul 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2"
                >
                  {category.skills.map((skill, i) => (
                    <motion.li 
                      key={i}
                      variants={itemVariants}
                      className="px-3 py-1.5 bg-[var(--color-dark-bg)] border border-[var(--color-dark-border)] rounded-md text-[var(--color-text-main)] text-sm font-medium hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors cursor-default"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
