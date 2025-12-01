import React from 'react';
import { Reveal, SlideIn } from './Reveal';
import { Ruler, ShieldCheck, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          <div className="lg:w-1/2 relative">
            <Reveal>
              <div className="relative z-10">
                <img
                  src="https://www.laube.com/wp-content/uploads/2025/04/Open_Die_Forging_Webp-1024x576.webp"
                  alt="Architectural Blueprint"
                  className="rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
              </div>
            </Reveal>
            <div className="absolute -bottom-10 -right-10 w-full h-full border-4 border-gold-500/20 -z-0 hidden lg:block"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-iron-100 -z-0 hidden lg:block rounded-full opacity-50"></div>
          </div>

          <div className="lg:w-1/2">
            <SlideIn>
              <h3 className="text-gold-600 font-bold tracking-widest uppercase text-sm mb-2">Who We Are</h3>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-iron-900 mb-6">
                Forging The Future <br /> With Precision.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                At Ironcrest Developers, we don't just build structures; we create landmarks. With over 35 years of industry leadership, our portfolio spans ultra-modern residential complexes, high-stakes commercial towers, and sustainable industrial hubs.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We adhere to the philosophy that every beam laid and every pane of glass installed is a testament to our reputation. Quality is not an act, it is our habit.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t pt-8 border-gray-100">
                <div className="flex flex-col gap-2">
                  <Ruler className="text-gold-600" size={28} />
                  <span className="font-bold text-iron-900">Precise Design</span>
                </div>
                <div className="flex flex-col gap-2">
                  <ShieldCheck className="text-gold-600" size={28} />
                  <span className="font-bold text-iron-900">Safety First</span>
                </div>
                <div className="flex flex-col gap-2">
                  <Clock className="text-gold-600" size={28} />
                  <span className="font-bold text-iron-900">On Time</span>
                </div>
              </div>
            </SlideIn>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;