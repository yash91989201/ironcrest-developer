import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Projects from '../components/Projects';
import OurClients from '../components/OurClients';
import { Reveal } from '../components/Reveal';
import { Counter } from '../components/Counter';
import { stats } from '../data';

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

      {/* Our Clients */}
      <OurClients />
    </>
  );
};

export default Home;
