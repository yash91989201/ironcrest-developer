import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { projects } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Oil & Gas', 'Offshore', 'Renewable Energy', 'Petrochemicals', 'Infrastructure'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div>
      <PageHeader 
        title="Global Projects" 
        subtitle="Portfolio"
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2800&auto=format&fit=crop"
      />
      
      <section className="py-16 bg-iron-50 min-h-screen">
         <div className="max-w-7xl mx-auto px-6 mb-12">
             <div className="flex flex-col items-center justify-center text-center">
                <Reveal>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-iron-900 mb-4">
                        Filter by <span className="text-gold-500">Sector</span>
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl">
                        Explore our diverse project portfolio across the energy and infrastructure landscape.
                    </p>
                </Reveal>

                <Reveal delay={0.2}>
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-3 rounded-full border-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                                    activeCategory === category
                                    ? 'bg-gold-600 border-gold-600 text-white shadow-lg scale-105'
                                    : 'bg-white border-iron-200 text-iron-900 hover:border-gold-600 hover:text-gold-600'
                                }`}
                            >
                                {category === 'All' ? 'All Projects' : category}
                            </button>
                        ))}
                    </div>
                </Reveal>
             </div>
         </div>

         <div className="max-w-7xl mx-auto px-6">
            <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={project.id}
                            className="group relative overflow-hidden h-80 w-full cursor-pointer shadow-xl rounded-sm bg-gray-900"
                        >
                            <Link to={`/projects/${project.id}`} className="block w-full h-full relative group">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-iron-900 via-iron-900/40 to-transparent opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-1">
                                            {project.category}
                                        </p>
                                        <h4 className="text-xl font-serif font-bold text-white mb-2">
                                            {project.title}
                                        </h4>
                                        <div className="w-12 h-0.5 bg-gold-500 mb-2 group-hover:w-full transition-all duration-500"></div>
                                        <span className="text-gray-300 text-sm flex items-center gap-2">
                                            {project.location}
                                        </span>
                                    </div>
                                </div>
                                
                                {/* Overlay Badge */}
                                <div className="absolute top-4 right-4 bg-gold-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded-sm shadow-lg">
                                    Completed
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
            
            {filteredProjects.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    No projects found in this category.
                </div>
            )}
         </div>
      </section>

      <section className="py-24 bg-iron-900 text-white">
          <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                  <div className="lg:w-1/2">
                      <Reveal>
                          <h3 className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-4">Philosophy</h3>
                          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                              Engineering The Future
                          </h2>
                          <p className="text-gray-400 text-lg leading-relaxed mb-6">
                              We believe that critical infrastructure is the backbone of modern civilization. From deep-sea extraction to renewable power grids, our projects are designed to be robust, efficient, and sustainable.
                          </p>
                          <p className="text-gray-400 text-lg leading-relaxed">
                              By integrating advanced materials with cutting-edge construction technology, we deliver assets that power economies and connect communities.
                          </p>
                      </Reveal>
                  </div>
                  <div className="lg:w-1/2">
                      <Reveal delay={0.3}>
                          <div className="grid grid-cols-2 gap-4">
                                <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop" alt="Detail 1" className="rounded-sm w-full h-64 object-cover" />
                                <img src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c7c?q=80&w=800&auto=format&fit=crop" alt="Detail 2" className="rounded-sm w-full h-64 object-cover mt-8" />
                          </div>
                      </Reveal>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default ProjectsPage;