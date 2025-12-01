import React from 'react';
import { Reveal } from './Reveal';

interface Props {
  title: string;
  subtitle?: string;
  image: string;
}

const PageHeader: React.FC<Props> = ({ title, subtitle, image }) => {
  return (
    <div className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 parallax"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      >
        <div className="absolute inset-0 bg-iron-900/70 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {subtitle && (
            <Reveal>
                <h3 className="text-gold-500 font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4">
                {subtitle}
                </h3>
            </Reveal>
        )}
        <Reveal delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-serif text-white font-bold leading-tight">
              {title}
            </h1>
        </Reveal>
      </div>
    </div>
  );
};

export default PageHeader;