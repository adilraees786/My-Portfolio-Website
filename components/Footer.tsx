
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-[#111111] bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0">
          <div>
            <a href="#home" className="text-xl font-black text-white tracking-tighter">
            ADIL RAEES
            </a>
            <p className="mt-4 text-[#666666] text-xs font-bold uppercase tracking-[0.2em]">
              Frontend Developer
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {['Home', 'About', 'Projects', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-[#999999] hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">
                {link}
              </a>
            ))}
          </div>
          
          <div className="text-[#444444] text-[10px] font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
