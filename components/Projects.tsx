import React from 'react';
import { Reveal } from './Reveal';
import { projects } from '../data';
import { Link } from 'react-router-dom';

interface Props {
    limit?: number;
    showTitle?: boolean;
}

const Projects: React.FC<Props> = ({ limit, showTitle = true }) => {
  const displayProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="py-24 bg-iron-50">
      <div className="max-w-7xl mx-auto px-6">
        {showTitle && (
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                <Reveal>
                    <div>
                        <h3 className="text-gold-600 font-bold tracking-widest uppercase text-sm mb-2">Our Portfolio</h3>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-iron-900">
                            Featured Projects
                        </h2>
                    </div>
                </Reveal>
                {limit && (
                    <Reveal delay={0.3}>
                        <Link to="/projects" className="hidden md:inline-block border-b-2 border-iron-900 pb-1 text-iron-900 font-bold uppercase tracking-wider hover:text-gold-600 hover:border-gold-600 transition-all">
                            View All Projects
                        </Link>
                    </Reveal>
                )}
            </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayProjects.map((project, index) => (
                 <Reveal key={project.id} delay={0.1 * index}>
                    <Link to={`/projects/${project.id}`} className="block w-full h-full">
                        <div className="group relative overflow-hidden h-80 w-full cursor-pointer shadow-md">
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-iron-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                                <h4 className="text-2xl font-serif font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                    {project.title}
                                </h4>
                                <p className="text-gold-500 uppercase tracking-widest text-xs mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                                    {project.category}
                                </p>
                                <span className="text-gray-300 text-sm mt-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                                    {project.location}
                                </span>
                            </div>
                        </div>
                    </Link>
                </Reveal>
            ))}
        </div>

        {limit && (
            <div className="mt-12 text-center md:hidden">
                 <Link to="/projects" className="border-b-2 border-iron-900 pb-1 text-iron-900 font-bold uppercase tracking-wider">
                    View All Projects
                </Link>
            </div>
        )}
      </div>
    </section>
  );
};

export default Projects;