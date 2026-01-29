
import React from 'react';
import SectionHeading from './SectionHeading';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = [
    'Languages',
    'Framework/Libraries',
    'State Management',
    'Architecture',
    'Tools',
    'Design',
  ] as const;

  return (
    <section id="skills" className="py-24 px-6 bg-[#050505] border-y border-[#111111]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          subtitle="Expertise" 
          title="Technical Skillset" 
          center 
        />
        
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-xs font-black text-[#666666] uppercase tracking-[0.2em] mb-8 pb-4 border-b border-[#222222]">
                {category}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                {SKILLS.filter(s => s.category === category).map((skill) => (
                  <li key={skill.name} className="flex flex-col">
                    <span className="text-white font-bold text-lg mb-1">{skill.name}</span>
                    <span className="text-[#333333] text-[10px] font-bold uppercase tracking-widest">Advanced proficiency</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
