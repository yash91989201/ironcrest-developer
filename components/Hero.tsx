import React from 'react';
import { Reveal } from './Reveal';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with Parallax feel (via fixed attachment in css) */}
      <div 
        className="absolute inset-0 z-0 parallax"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2800&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-iron-900/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-iron-900 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center md:text-left w-full">
        <Reveal>
            <h2 className="text-gold-500 font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4">
              Since 1985
            </h2>
        </Reveal>
        <Reveal delay={0.4}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold leading-tight mb-6">
              Building <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Legacies</span>
            </h1>
        </Reveal>
        <Reveal delay={0.6}>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed mb-10 md:mr-auto">
              We forge structures that stand the test of time. Precision engineering meets architectural artistry.
            </p>
        </Reveal>
        <Reveal delay={0.8}>
            <div className="flex flex-col md:flex-row gap-4">
                <a href="#projects" className="px-8 py-4 bg-white text-iron-900 font-bold uppercase tracking-wider hover:bg-gold-500 hover:text-white transition-all duration-300 border-2 border-white hover:border-gold-500">
                  View Our Work
                </a>
                <a href="#contact" className="px-8 py-4 bg-transparent text-white font-bold uppercase tracking-wider hover:bg-white/10 transition-all duration-300 border-2 border-white">
                  Contact Us
                </a>
            </div>
        </Reveal>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce text-white/50">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default Hero;