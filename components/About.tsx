import React from 'react';
import { Reveal, SlideIn } from './Reveal';
import { Ruler, ShieldCheck, Clock } from 'lucide-react';

interface TeamMember {
  name: string;
  title: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Alexander Ironcrest',
    title: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Sarah Jenkins',
    title: 'Head Architect',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Marcus Thorne',
    title: 'Chief Engineer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'Elena Rodriguez',
    title: 'Project Director',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop'
  },
  {
    name: 'David L. Harrington',
    title: 'Executive Director – Global Projects',
    image: '/assets/our-team/david-l-harrington.jpeg'
  },
  {
    name: 'Priya Malhotra',
    title: 'Director – Strategic Development (Asia Pacific)',
    image: '/assets/our-team/priya-malhotra.jpeg'
  },
  {
    name: 'Carlos M. Alvarez',
    title: 'Vice President – Infrastructure & Construction',
    image: '/assets/our-team/carlos-m-alvarez.jpeg'
  },
  {
    name: 'Aisha Noor Al-Hassan',
    title: 'Director – Offshore Energy & Power Projects',
    image: '/assets/our-team/aisha-noor-al-hassan.jpeg'
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">

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

        <div className="text-center mb-16">
          <SlideIn>
            <h3 className="text-gold-600 font-bold tracking-widest uppercase text-sm mb-2">Our Leadership</h3>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-iron-900 mb-4">
              Meet The Team
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Our experienced leadership team brings decades of expertise in construction, development, and strategic project management.
            </p>
          </SlideIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Reveal key={member.name}>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-2">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-iron-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out w-full px-4">
                    <p className="text-sm font-medium leading-tight bg-black/20 backdrop-blur-sm rounded-md py-2 px-3">{member.title}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gold-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                    <div className="w-6 h-6 border-2 border-white rounded-full"></div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="font-bold text-lg text-iron-900 group-hover:text-gold-600 transition-colors duration-300">{member.name}</h4>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;