
import React, { useState } from 'react';
import SectionHeading from './SectionHeading';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <SectionHeading 
              subtitle="Get In Touch" 
              title="Let's build your next digital product." 
            />
            <p className="text-[#999999] text-xl mt-8 mb-12 leading-relaxed max-w-md">
              I'm open to freelance opportunities and full-time positions. Reach out directly.
            </p>
            
            <div className="space-y-12">
              <div>
                <h4 className="text-[#666666] text-xs font-bold uppercase tracking-widest mb-4">Email</h4>
                <a href="mailto:adilraees911@gmail.com" className="text-white text-2xl font-bold hover:text-[#cccccc] transition-colors">adilraees911@gmail.com</a>
              </div>
              
              <div>
                <h4 className="text-[#666666] text-xs font-bold uppercase tracking-widest mb-4">Phone</h4>
                <p className="text-white text-2xl font-bold">0307-8068476</p>
              </div>

              <div>
                <h4 className="text-[#666666] text-xs font-bold uppercase tracking-widest mb-4">Location</h4>
                <p className="text-white text-2xl font-bold">Saddar, Karachi</p>
              </div>

              <div className="flex space-x-8 pt-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#666666] hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">LinkedIn</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#666666] hover:text-white text-sm font-bold uppercase tracking-widest transition-colors">GitHub</a>
              </div>
            </div>
          </div>
          
          <div className="bg-black border-2 border-[#111111] p-10 relative">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <h3 className="text-3xl font-bold text-white mb-4">Sent.</h3>
                <p className="text-[#999999]">I will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-[#666666] uppercase tracking-[0.2em]">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-[#222222] py-4 text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-[#666666] uppercase tracking-[0.2em]">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-[#222222] py-4 text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-[#666666] uppercase tracking-[0.2em]">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-[#222222] py-4 text-white focus:outline-none focus:border-white transition-colors resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-white text-black font-black uppercase tracking-[0.3em] text-sm hover:bg-[#cccccc] transition-colors disabled:bg-[#333333]"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
