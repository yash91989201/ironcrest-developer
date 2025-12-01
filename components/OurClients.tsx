import React from 'react';
import { Reveal } from './Reveal';

const clientLogos = [
    { name: 'Bechtel', src: '/assets/our-clients/bechtel.png' },
    { name: 'DPR Construction', src: '/assets/our-clients/dpr-construction.png' },
    { name: 'EMCOR', src: '/assets/our-clients/emcor.png' },
    { name: 'Fluor', src: '/assets/our-clients/fluor.png' },
    { name: 'Gilbane', src: '/assets/our-clients/gilbane.png' },
    { name: 'L&T', src: '/assets/our-clients/lt.png' },
    { name: 'Turner', src: '/assets/our-clients/turner.png' },
    { name: 'Tutor Perini', src: '/assets/our-clients/tutor-perini.png' },
    { name: 'VINCI', src: '/assets/our-clients/vinci.png' },
    { name: 'Whiting-Turner', src: '/assets/our-clients/whitting-turner.png' },
];

const OurClients: React.FC = () => {
    return (
        <section className="py-24 bg-iron-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <Reveal>
                        <h3 className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-2">
                            Trusted Partners
                        </h3>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
                            Our Clients
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Proud to work with industry-leading construction companies worldwide
                        </p>
                    </Reveal>
                </div>

                {/* Marquee Container */}
                <div className="relative">
                    {/* Gradient Overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-iron-900 to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-iron-900 to-transparent z-10" />

                    {/* First Row - Left to Right */}
                    <div className="mb-8 overflow-hidden">
                        <div className="flex animate-marquee-left hover:pause-marquee">
                            {/* Duplicate the logos for seamless loop */}
                            {[...clientLogos, ...clientLogos].map((client, index) => (
                                <div
                                    key={`${client.name}-${index}`}
                                    className="flex-shrink-0 mx-8 w-56 h-32 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 hover:border-gold-500/50 transition-all duration-300 group"
                                >
                                    <img
                                        src={client.src}
                                        alt={client.name}
                                        className="max-w-[200px] max-h-[110px] object-contain transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Second Row - Right to Left */}
                    <div className="overflow-hidden">
                        <div className="flex animate-marquee-right hover:pause-marquee">
                            {/* Duplicate the logos for seamless loop */}
                            {[...clientLogos, ...clientLogos].map((client, index) => (
                                <div
                                    key={`${client.name}-reverse-${index}`}
                                    className="flex-shrink-0 mx-8 w-56 h-32 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 hover:border-gold-500/50 transition-all duration-300 group"
                                >
                                    <img
                                        src={client.src}
                                        alt={client.name}
                                        className="max-w-[200px] max-h-[110px] object-contain transition-all duration-300 opacity-90 group-hover:opacity-100 group-hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }

        .hover\\:pause-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
};

export default OurClients;
