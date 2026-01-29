
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      
      <main className="space-y-[120px] pb-[120px]">
        <Hero />
        
        <div className="reveal">
          <About />
        </div>
        
        <div className="reveal">
          <Projects />
        </div>
        
        <div className="reveal">
          <Skills />
        </div>
        
        <div className="reveal">
          <Contact />
        </div>
      </main>
      
      <Footer />

      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }
        .reveal-active {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default App;
