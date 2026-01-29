
import React from 'react';
import SectionHeading from './SectionHeading';
import { EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 border-y border-[#111111]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <SectionHeading 
              subtitle="Profile" 
              title="Building pixel-perfect interfaces with purpose." 
            />
            <div className="space-y-6 text-[#999999] text-lg leading-[1.8] mt-10">
              <p>
                I am a Frontend Developer with experience building production-level products using React.js, Next.js, and Tailwind CSS. I specialize in developing scalable, responsive, and SEO-optimized web applications through modern frontend architectures.
              </p>
              <p>
                My expertise includes state management with Redux and Zustand, REST API integration, and performance optimization. I have a proven ability to convert Figma designs into maintainable UI components following best practices.
              </p>
              
              <div className="pt-10 space-y-10">
                <div>
                  <h4 className="text-[#666666] text-xs font-bold uppercase tracking-widest mb-6">Recent Experience</h4>
                  <div className="space-y-8">
                    {EXPERIENCE.map((exp, idx) => (
                      <div key={idx} className="border-l-2 border-[#222222] pl-6 py-1">
                        <h5 className="text-white font-bold text-lg">{exp.role} @ {exp.company}</h5>
                        <p className="text-[#666666] text-sm uppercase tracking-widest font-bold mt-1">{exp.period} • {exp.location}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[#666666] text-xs font-bold uppercase tracking-widest mb-6">Education</h4>
                  <div className="border-l-2 border-[#222222] pl-6 py-1">
                    <h5 className="text-white font-bold text-lg">{EDUCATION.degree}</h5>
                    <p className="text-white text-sm font-medium mt-1">{EDUCATION.institute}</p>
                    <p className="text-[#666666] text-sm uppercase tracking-widest font-bold mt-1">{EDUCATION.period} • {EDUCATION.graduation}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="sticky top-32">
            <div className="space-y-12">
               <div className="border-2 border-[#333333] p-4 group bg-black">
                <div className="aspect-[4/3] bg-[#111111] overflow-hidden grayscale">
                  <img 
                    src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2340&auto=format&fit=crop" 
                    alt="Work Environment" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div>
                <h4 className="text-[#666666] text-xs font-bold uppercase tracking-widest mb-6">Certifications</h4>
                <div className="grid grid-cols-1 gap-4">
                  {CERTIFICATIONS.map((cert, idx) => (
                    <div key={idx} className="bg-[#0a0a0a] border border-[#222222] p-5">
                      <p className="text-white font-bold text-sm">{cert}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
