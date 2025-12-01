import React from 'react';
import PageHeader from '../components/PageHeader';
import About from '../components/About';
import { Reveal, SlideIn } from '../components/Reveal';
import { Users, Target, Trophy, Clock, Medal } from 'lucide-react';
import { team } from '../data';

const AboutPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Our Story" 
        subtitle="Legacy & Vision"
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2800&auto=format&fit=crop"
      />
      
      {/* Reuse main About section */}
      <About />

      {/* History Timeline */}
      <section className="py-24 bg-iron-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
            <Reveal>
                <div className="text-center mb-16">
                    <h3 className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-2">Milestones</h3>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold">Our History</h2>
                </div>
            </Reveal>

            <div className="relative border-l-2 border-white/10 ml-4 md:ml-1/2 space-y-12">
                {[
                    { year: "1985", title: "Foundation", desc: "Alexander Ironcrest establishes the firm with a single truck and a vision for quality." },
                    { year: "1995", title: "Commercial Expansion", desc: "Ironcrest completes the 'Metro Center', marking its entry into large-scale commercial real estate." },
                    { year: "2010", title: "Green Initiative", desc: "The company adopts 100% sustainable building practices for all new developments." },
                    { year: "2023", title: "National Award", desc: "Recipient of the 'Golden Beam' award for architectural excellence in urban design." }
                ].map((item, index) => (
                    <Reveal key={index} delay={index * 0.2}>
                        <div className="relative pl-8 md:pl-12">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gold-500 rounded-full border-4 border-iron-900"></div>
                            <div className="flex flex-col md:flex-row gap-2 md:gap-8 md:items-baseline">
                                <span className="text-gold-500 text-2xl font-serif font-bold">{item.year}</span>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                    <p className="text-gray-400 max-w-xl">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
             <div className="text-center mb-16">
                <Reveal>
                    <h3 className="text-gold-600 font-bold tracking-widest uppercase text-sm mb-2">Leadership</h3>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-iron-900">
                        Meet The Team
                    </h2>
                </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                    <Reveal key={member.id} delay={index * 0.1}>
                        <div className="group text-center">
                            <div className="relative overflow-hidden mb-6 rounded-sm shadow-lg">
                                <img src={member.image} alt={member.name} className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                                <div className="absolute inset-0 bg-gold-500/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 translate-y-full group-hover:translate-y-0 transform">
                                    <p className="text-white text-sm leading-relaxed font-medium">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                            <h4 className="text-xl font-serif font-bold text-iron-900">{member.name}</h4>
                            <p className="text-gold-600 text-xs font-bold uppercase tracking-wider">{member.role}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-iron-50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <Reveal>
                    <h3 className="text-gold-600 font-bold tracking-widest uppercase text-sm mb-2">Why Choose Us</h3>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-iron-900">
                        Core Values
                    </h2>
                </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <Reveal delay={0.1}>
                    <div className="bg-white p-10 shadow-lg text-center h-full hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-600">
                            <Target size={32} />
                        </div>
                        <h4 className="text-xl font-bold mb-4 font-serif">Precision</h4>
                        <p className="text-gray-600 leading-relaxed">
                            We believe that excellence is in the details. Our precision engineering ensures that every structure is built to exact specifications.
                        </p>
                    </div>
                </Reveal>
                <Reveal delay={0.2}>
                    <div className="bg-white p-10 shadow-lg text-center h-full hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-600">
                            <Users size={32} />
                        </div>
                        <h4 className="text-xl font-bold mb-4 font-serif">Collaboration</h4>
                        <p className="text-gray-600 leading-relaxed">
                            We work closely with architects, stakeholders, and communities to create spaces that serve their intended purpose perfectly.
                        </p>
                    </div>
                </Reveal>
                <Reveal delay={0.3}>
                    <div className="bg-white p-10 shadow-lg text-center h-full hover:-translate-y-2 transition-transform duration-300">
                        <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gold-600">
                            <Trophy size={32} />
                        </div>
                        <h4 className="text-xl font-bold mb-4 font-serif">Excellence</h4>
                        <p className="text-gray-600 leading-relaxed">
                            Our commitment to quality has earned us industry recognition and, more importantly, the trust of our clients for over three decades.
                        </p>
                    </div>
                </Reveal>
            </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;