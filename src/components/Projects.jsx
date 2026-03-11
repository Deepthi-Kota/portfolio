import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Feedback Analysis Using GenAI',
      description: 'An AI-powered system analyzing customer reviews using NLP techniques including sentiment analysis, key phrase extraction, and trend detection to provide actionable insights.',
      tech: ['Python', 'MERN Stack', 'NLP'],
      github: 'https://github.com/kmitofficial/FeedbackAnalysisUsingGenAI-G228-PS24',
      featured: true
    },
    {
      id: 2,
      title: 'Cognitive Retraining for Children',
      description: 'A MERN stack platform designed for children under 15 with cognitive disorders. It features adaptive learning games and comprehensive progress tracking capabilities for parents and therapists.',
      tech: ['MERN Stack', 'Machine Learning', 'React'],
      github: 'https://github.com/bhanu5125/Final-PS',
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold flex-shrink-0">
              <span className="text-[var(--color-primary)] font-mono text-xl mr-2">03.</span> 
              Some Things I've Built
            </h2>
            <div className="h-px bg-[var(--color-dark-border)] flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-8 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className="flex justify-between items-center mb-6 text-[var(--color-primary)]">
                  <FiFolder size={40} className="stroke-1 opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="flex space-x-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
                        <FiGithub size={20} />
                      </a>
                    )}
                    {project.external && (
                      <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
                        <FiExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--color-primary)] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-[var(--color-text-muted)] text-base mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <ul className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <li key={i} className="text-xs font-mono text-[var(--color-accent)] bg-[var(--color-dark-bg)] px-2.5 py-1 rounded-[4px] border border-[var(--color-dark-border)]">
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
