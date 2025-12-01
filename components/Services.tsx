import React from 'react';
import { Reveal } from './Reveal';
import { Building2, Home, HardHat, Pickaxe, ArrowRight } from 'lucide-react';
import { services } from '../data';
import { Link } from 'react-router-dom';

const getIcon = (name: string) => {
    switch(name) {
        case 'building': return <Building2 size={40} />;
        case 'home': return <Home size={40} />;
        case 'hardhat': return <HardHat size={40} />;
        case 'pickaxe': return <Pickaxe size={40} />;
        default: return <Building2 size={40} />;
    }
}

interface Props {
    limit?: number;
    showTitle?: boolean;
}

const Services: React.FC<Props> = ({ limit, showTitle = true }) => {
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <section id="services" className="py-24 bg-iron-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {showTitle && (
            <div className="text-center mb-16">
                <Reveal width="100%">
                    <h3 className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-2">Our Capabilities</h3>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                        Mastery Across Sectors
                    </h2>
                </Reveal>
            </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayServices.map((service, index) => (
                <Reveal key={service.id} delay={0.1 * index}>
                    <div className="group p-8 border border-white/10 hover:border-gold-500/50 bg-white/5 hover:bg-white/10 transition-all duration-300 h-full flex flex-col items-center text-center cursor-default">
                        <div className="mb-6 text-gold-500 group-hover:scale-110 transition-transform duration-300">
                            {getIcon(service.icon)}
                        </div>
                        <h4 className="text-xl font-bold mb-4 font-serif">{service.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            {service.description}
                        </p>
                    </div>
                </Reveal>
            ))}
        </div>

        {limit && (
             <div className="mt-12 text-center">
                <Reveal delay={0.4}>
                     <Link to="/services" className="inline-flex items-center gap-2 text-gold-500 font-bold uppercase tracking-wider hover:text-white transition-colors">
                        View All Services <ArrowRight size={18} />
                     </Link>
                </Reveal>
             </div>
        )}
      </div>
    </section>
  );
};

export default Services;