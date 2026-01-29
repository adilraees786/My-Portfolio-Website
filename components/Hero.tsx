
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-20 text-center px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-9xl font-extrabold text-white tracking-tighter mb-8 leading-none">
          ADIL RAEES
        </h1>
        <p className="text-xl md:text-2xl text-[#999999] font-medium max-w-2xl mx-auto mb-12 leading-relaxed tracking-tight">
          Frontend Developer specializing in scalable, SEO-optimized React & Next.js architectures.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#projects"
            className="w-full sm:w-auto px-10 py-5 bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-[#cccccc] transition-all"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-10 py-5 border-2 border-white text-white font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all"
          >
            Start Chatting
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
