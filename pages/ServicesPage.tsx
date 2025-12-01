import React from 'react';
import PageHeader from '../components/PageHeader';
import Services from '../components/Services';
import { Reveal } from '../components/Reveal';
import { faqs } from '../data';
import { Monitor, Truck, Leaf, Shield, Plus } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Our Services" 
        subtitle="Expertise"
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2800&auto=format&fit=crop"
      />
      
      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <Reveal>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-iron-900 mb-6">
                    Comprehensive Construction Solutions
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                    From initial ground breaking to the final coat of paint, Ironcrest Developers offers end-to-end construction management. Our multidisciplinary team allows us to tackle complex challenges with agility and confidence.
                </p>
            </Reveal>
        </div>
      </section>

      {/* Full Services List */}
      <Services showTitle={false} />

      {/* Technology Section */}
      <section className="py-24 bg-iron-50">
          <div className="max-w-7xl mx-auto px-6">
             <div className="text-center mb-16">
                 <Reveal>
                     <h3 className="text-gold-600 font-bold tracking-widest uppercase text-sm mb-2">Innovation</h3>
                     <h2 className="text-4xl font-serif font-bold text-iron-900">Modern Technology</h2>
                 </Reveal>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[
                     { icon: Monitor, title: "BIM Modeling", desc: "Building Information Modeling (BIM) allows us to visualize projects in 3D before a single brick is laid, reducing errors and optimizing costs." },
                     { icon: Leaf, title: "Sustainable Tech", desc: "We utilize LEED-certified materials and energy-efficient systems to create environmentally responsible structures." },
                     { icon: Truck, title: "Advanced Logistics", desc: "GPS tracking and AI-driven supply chain management ensure that materials arrive exactly when needed, preventing delays." }
                 ].map((item, index) => (
                     <Reveal key={index} delay={index * 0.1}>
                         <div className="bg-white p-8 border-t-4 border-gold-500 shadow-sm hover:shadow-xl transition-shadow duration-300">
                             <div className="mb-4 text-iron-900">
                                 <item.icon size={40} />
                             </div>
                             <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                             <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                         </div>
                     </Reveal>
                 ))}
             </div>
          </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6">
             <div className="mb-16">
                 <Reveal>
                    <h3 className="text-gold-600 font-bold tracking-widest uppercase text-sm mb-2">How We Work</h3>
                    <h2 className="text-4xl font-serif font-bold text-iron-900">
                        The Ironcrest Process
                    </h2>
                 </Reveal>
             </div>
             
             <div className="space-y-12">
                 {[
                     { step: "01", title: "Consultation & Planning", desc: "We begin by understanding your vision, budget, and timeline. Our team conducts feasibility studies to ensure a solid foundation for success." },
                     { step: "02", title: "Design & Pre-Construction", desc: "Our architects and engineers develop detailed blueprints. We navigate zoning laws and permit acquisition so you don't have to." },
                     { step: "03", title: "Execution & Construction", desc: "Boots on the ground. We manage contractors, materials, and schedules with military precision to keep the project on track." },
                     { step: "04", title: "Quality Assurance & Handover", desc: "Rigorous inspections ensure everything meets our high standards. We hand over the keys only when the project is flawless." }
                 ].map((item, i) => (
                     <Reveal key={i} delay={i * 0.1}>
                         <div className="flex flex-col md:flex-row gap-6 md:gap-12 border-b border-gray-100 pb-12 group hover:bg-gray-50 transition-colors p-4 rounded-sm">
                             <span className="text-6xl font-serif text-gray-200 font-bold group-hover:text-gold-500 transition-colors">{item.step}</span>
                             <div>
                                 <h3 className="text-2xl font-serif font-bold text-iron-900 mb-3">{item.title}</h3>
                                 <p className="text-gray-600 leading-relaxed max-w-2xl">{item.desc}</p>
                             </div>
                         </div>
                     </Reveal>
                 ))}
             </div>
         </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-iron-900 text-white">
         <div className="max-w-4xl mx-auto px-6">
             <Reveal>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold">Frequently Asked Questions</h2>
                </div>
             </Reveal>

             <div className="space-y-6">
                 {faqs.map((faq, index) => (
                     <Reveal key={index} delay={index * 0.1}>
                         <div className="bg-white/5 p-6 rounded-sm hover:bg-white/10 transition-colors">
                             <h4 className="flex items-start gap-3 font-bold text-lg mb-3">
                                 <Plus className="text-gold-500 flex-shrink-0 mt-1" size={20} />
                                 {faq.question}
                             </h4>
                             <p className="text-gray-400 pl-8 leading-relaxed">
                                 {faq.answer}
                             </p>
                         </div>
                     </Reveal>
                 ))}
             </div>
         </div>
      </section>
    </div>
  );
};

export default ServicesPage;