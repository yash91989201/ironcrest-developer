import React from 'react';
import PageHeader from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { jobs } from '../data';
import { Briefcase, Heart, TrendingUp, ShieldCheck, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const CareersPage: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="Join Our Team" 
        subtitle="Careers"
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2800&auto=format&fit=crop"
      />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <Reveal>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-iron-900 mb-6">
                    Build Your Future With Us
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-12">
                    At Ironcrest Developers, we believe that our people are our strongest foundation. We offer a collaborative environment where innovation thrives, safety is paramount, and your career can reach new heights.
                </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <Reveal delay={0.1}>
                    <div className="p-6 border border-gray-100 rounded-sm hover:border-gold-500 transition-colors">
                        <Heart className="text-gold-500 mb-4" size={32} />
                        <h4 className="text-xl font-bold font-serif mb-2">Health & Wellness</h4>
                        <p className="text-sm text-gray-500">Comprehensive medical, dental, and vision coverage for you and your family.</p>
                    </div>
                </Reveal>
                <Reveal delay={0.2}>
                    <div className="p-6 border border-gray-100 rounded-sm hover:border-gold-500 transition-colors">
                        <TrendingUp className="text-gold-500 mb-4" size={32} />
                        <h4 className="text-xl font-bold font-serif mb-2">Professional Growth</h4>
                        <p className="text-sm text-gray-500">Continuous training programs, mentorship, and tuition reimbursement.</p>
                    </div>
                </Reveal>
                <Reveal delay={0.3}>
                    <div className="p-6 border border-gray-100 rounded-sm hover:border-gold-500 transition-colors">
                        <ShieldCheck className="text-gold-500 mb-4" size={32} />
                        <h4 className="text-xl font-bold font-serif mb-2">Safety First</h4>
                        <p className="text-sm text-gray-500">A zero-compromise approach to safety, ensuring everyone goes home safe.</p>
                    </div>
                </Reveal>
            </div>
        </div>
      </section>

      <section className="py-24 bg-iron-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                 <Reveal>
                    <h3 className="text-gold-600 font-bold tracking-widest uppercase text-sm mb-2">Open Positions</h3>
                    <h2 className="text-4xl font-serif font-bold text-iron-900">
                        Current Opportunities
                    </h2>
                 </Reveal>
            </div>

            <div className="space-y-6">
                {jobs.map((job, index) => (
                    <Reveal key={job.id} delay={index * 0.1}>
                        <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div>
                                <h4 className="text-2xl font-serif font-bold text-iron-900 mb-2">{job.title}</h4>
                                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                                    <span className="flex items-center gap-1">
                                        <Briefcase size={16} className="text-gold-500" /> {job.department}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <MapPin size={16} className="text-gold-500" /> {job.location}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock size={16} className="text-gold-500" /> {job.type}
                                    </span>
                                </div>
                                <p className="text-gray-600 max-w-2xl">
                                    {job.description}
                                </p>
                            </div>
                            <Link to="/contact" className="px-8 py-3 bg-iron-900 text-white font-bold uppercase tracking-wider hover:bg-gold-600 transition-colors whitespace-nowrap">
                                Apply Now
                            </Link>
                        </div>
                    </Reveal>
                ))}
            </div>

             <div className="mt-16 text-center">
                <Reveal delay={0.4}>
                     <p className="text-gray-600 mb-4">Don't see a position that fits?</p>
                     <Link to="/contact" className="text-gold-600 font-bold hover:text-iron-900 transition-colors border-b-2 border-gold-600 pb-1">
                        Send us your resume
                     </Link>
                </Reveal>
             </div>
          </div>
      </section>
    </div>
  );
};

export default CareersPage;