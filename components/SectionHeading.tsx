
import React from 'react';

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  center?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ subtitle, title, center }) => {
  return (
    <div className={`space-y-6 ${center ? 'text-center' : ''}`}>
      <span className="text-[#666666] font-black uppercase tracking-[0.3em] text-[10px]">
        {subtitle}
      </span>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tighter">
        {title}
      </h2>
      <div className={`h-1 w-24 bg-white ${center ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeading;
