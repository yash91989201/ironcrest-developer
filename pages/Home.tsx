import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import { Reveal } from '../components/Reveal';
import { Counter } from '../components/Counter';
import { stats, testimonials } from '../data';
import { Quote } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      
      {/* Stats Section */}
      <section className="py-20 bg-iron-900 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                    const numericValue = parseInt(stat.value.replace(/[^0-9]/g, ''));
                    const suffix = stat.value.replace(/[0-9]/g, '');

                    return (
                        <Reveal key={index} delay={index * 0.1}>
                            <div className="text-center">
                                <h3 className="text-4xl md:text-6xl font-serif font-bold text-gold-500 mb-2 flex justify-center items-center">
                                    <Counter to={numericValue} suffix={suffix} />
                                </h3>
                                <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">{stat.label}</p>
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </div>
      </section>

      <Services limit={4} />
      <Projects limit={3} />

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <Reveal>
                    <h3 className="text-gold-600 font-bold tracking-widest uppercase text-sm mb-2">Testimonials</h3>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-iron-900">
                        Client Voices
                    </h2>
                </Reveal>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((t, index) => (
                    <Reveal key={t.id} delay={index * 0.2}>
                        <div className="bg-iron-50 p-8 h-full flex flex-col relative">
                            <Quote className="text-gold-500/20 absolute top-4 right-4" size={48} />
                            <p className="text-gray-600 italic mb-6 leading-relaxed flex-grow">"{t.quote}"</p>
                            <div className="mt-auto">
                                <h4 className="text-iron-900 font-bold font-serif text-lg">{t.name}</h4>
                                <p className="text-gold-600 text-xs font-bold uppercase tracking-wider">{t.role}</p>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
      </section>
    </>
  );
};

export default Home;