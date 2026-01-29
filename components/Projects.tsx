
import React from 'react';
import SectionHeading from './SectionHeading';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          subtitle="Portfolio" 
          title="Selected Projects" 
          center 
        />
        
        <div className="mt-20 grid md:grid-cols-3 grid-cols-2 gap-12">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group border border-[#333333] bg-black hover:bg-[#0a0a0a] transition-all duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden border-b border-[#333333] grayscale">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-80"
                />
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[#222222] text-[#999999] text-[10px] font-bold uppercase tracking-widest border border-[#333333]">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-[#999999] mb-8 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center space-x-6">
                  {project.link && (
                    <a 
                      href={project.link} 
                      className="text-white font-bold text-sm uppercase tracking-widest border-b-2 border-white pb-1 hover:text-[#cccccc] hover:border-[#cccccc] transition-all"
                    >
                      View Live
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="text-[#666666] hover:text-white transition-colors text-sm uppercase tracking-widest font-bold"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
