import React from 'react';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Contact';
import { Reveal } from '../components/Reveal';
import { MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="Get Started"
        image="https://images.unsplash.com/photo-1423666639041-f14d70fa4c48?q=80&w=2800&auto=format&fit=crop"
      />

      <div className="bg-iron-900">
        <Contact />
      </div>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold text-iron-900 mb-4">Our Presence</h2>
              <p className="text-gray-600">Serving clients across major metropolitan hubs.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { city: "New York", address: "1200 Steel Ave, Suite 500", phone: "+1 (212) 555-0123" },
                { city: "Los Angeles", address: "450 Wilshire Blvd, Floor 12", phone: "+1 (310) 555-0199" },
                { city: "Chicago", address: "780 Michigan Ave, Suite 300", phone: "+1 (312) 555-0155" },
                { city: "Mumbai, India", address: "7 Marine Drive, Fort District", phone: "+91 7943494755" },
                { city: "London", address: "22 Bishopsgate, Level 18", phone: "+44 20 5550 7890" },
                { city: "Dubai", address: "120 Sheikh Zeyed Road, Tower 3", phone: "+971 4 5555 2040" },
                { city: "Bangalore, India", address: "Electronic City Phase 1", phone: "+91 7965267779" },
                { city: "Hyderabad, India", address: "HITEC City, Madhapur", phone: "+91 7965267780" },
                { city: "Pune, India", address: "Baner Road, Balewadi", phone: "+91 7943494756" }
              ].map((loc, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="border border-gray-100 p-8 text-center hover:border-gold-500 transition-colors group">
                  <div className="w-12 h-12 bg-iron-50 rounded-full flex items-center justify-center mx-auto mb-4 text-iron-900 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-xl font-bold font-serif mb-2">{loc.city}</h3>
                  <p className="text-gray-500 mb-1">{loc.address}</p>
                  <p className="text-gold-600 font-bold">{loc.phone}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-16 w-full h-96 bg-gray-200 rounded-sm overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                alt="Map Location"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-iron-900/10 pointer-events-none">
                <span className="bg-white px-6 py-3 font-bold uppercase tracking-wider shadow-lg text-iron-900">
                  View HQ on Google Maps
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
