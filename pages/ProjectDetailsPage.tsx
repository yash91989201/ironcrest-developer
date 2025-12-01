
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data';
import { Reveal } from '../components/Reveal';
import { ArrowLeft, Calendar, DollarSign, MapPin, Briefcase, ChevronRight, PenTool, Ruler, CheckCircle2, Leaf, Award, ShieldCheck, Target, Activity, FileText, Settings, Flag } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const ProjectDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState(projects.find(p => p.id === Number(id)));

  useEffect(() => {
    setProject(projects.find(p => p.id === Number(id)));
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
            <Link to="/projects" className="text-gold-600 hover:text-gold-500 flex items-center gap-2">
                <ArrowLeft size={20} /> Back to Projects
            </Link>
        </div>
    );
  }

  // Find next project for navigation
  const nextProject = projects.find(p => p.id === project.id + 1);

  return (
    <div>
        <PageHeader 
            title={project.title} 
            subtitle={project.category}
            image={project.image}
        />

        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-8">
                     <Link to="/projects" className="inline-flex items-center gap-2 text-gray-500 hover:text-gold-600 transition-colors uppercase tracking-widest text-xs font-bold mb-8">
                        <ArrowLeft size={16} /> Back to Portfolio
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Overview */}
                        <Reveal>
                            <h2 className="text-3xl font-serif font-bold text-iron-900 mb-6">Project Overview</h2>
                            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                                {project.description}
                            </p>
                        </Reveal>

                        {/* Objectives */}
                        {project.objectives && (
                             <Reveal delay={0.1}>
                                <div className="mb-12">
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <Target className="text-gold-600" size={24} /> Project Objectives
                                    </h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {project.objectives.map((obj, i) => (
                                            <li key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-sm">
                                                <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                                                <span className="text-gray-700 text-sm font-medium">{obj}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                             </Reveal>
                        )}

                        {/* Scope of Work */}
                        {project.scope && (
                            <Reveal delay={0.2}>
                                <div className="mb-12 border-l-4 border-iron-900 pl-6 py-2">
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                        <FileText className="text-iron-900" size={24} /> Scope of Work
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed font-medium">
                                        {project.scope}
                                    </p>
                                </div>
                            </Reveal>
                        )}

                        {/* Detailed Challenges & Solutions */}
                        <div className="space-y-12 mb-12">
                            <Reveal delay={0.3}>
                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-iron-900">Detailed Challenges</h3>
                                    <p className="text-gray-600 leading-relaxed bg-red-50 p-6 rounded-sm border-l-4 border-red-400">
                                        {project.challenge || "Navigating complex regulatory environments while maintaining strict project timelines in adverse weather conditions."}
                                    </p>
                                </div>
                            </Reveal>
                            <Reveal delay={0.4}>
                                <div>
                                    <h3 className="text-xl font-bold mb-4 text-iron-900">Detailed Solutions / Approach</h3>
                                    <p className="text-gray-600 leading-relaxed bg-green-50 p-6 rounded-sm border-l-4 border-green-500">
                                        {project.solution || "Leveraging our integrated design-build approach, we utilized pre-fabricated modular components and advanced BIM coordination to accelerate delivery without compromising quality."}
                                    </p>
                                </div>
                            </Reveal>
                        </div>

                         {/* Technical Specifications */}
                         {project.techSpecs && (
                            <Reveal delay={0.5}>
                                <div className="mb-12">
                                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                        <Settings className="text-gold-600" size={24} /> Technical Specifications
                                    </h3>
                                    <div className="overflow-hidden border border-gray-200 rounded-sm">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <tbody className="divide-y divide-gray-200 bg-white">
                                                {project.techSpecs.map((spec, i) => (
                                                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 w-1/3 bg-gray-50">
                                                            {spec.label}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                            {spec.value}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </Reveal>
                         )}

                         {/* Project Timeline */}
                         {project.projectTimeline && (
                             <Reveal delay={0.6}>
                                 <div className="mb-12">
                                    <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                                        <Activity className="text-gold-600" size={24} /> Project Timeline
                                    </h3>
                                    <div className="relative border-l-2 border-gray-200 ml-4 space-y-8">
                                        {project.projectTimeline.map((item, i) => (
                                            <div key={i} className="relative pl-8">
                                                <div className="absolute -left-[9px] top-1 w-4 h-4 bg-white border-4 border-gold-500 rounded-full"></div>
                                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-1">
                                                    <span className="text-gold-600 font-bold text-sm uppercase tracking-wider">{item.date}</span>
                                                    <span className="hidden sm:inline text-gray-300">|</span>
                                                    <h4 className="font-bold text-iron-900">{item.phase}</h4>
                                                </div>
                                                <p className="text-sm text-gray-500">{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                 </div>
                             </Reveal>
                         )}

                         {/* Outcomes / Results */}
                         {project.outcomes && (
                            <Reveal delay={0.7}>
                                <div className="mb-12 bg-iron-900 text-white p-8 rounded-sm">
                                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                        <Flag className="text-gold-500" size={24} /> Project Outcomes / Results
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {project.outcomes.map((outcome, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className="text-gold-500 mt-1 flex-shrink-0" size={20} />
                                                <span className="text-gray-300 text-sm leading-relaxed">{outcome}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Reveal>
                         )}

                         {/* Sustainability Section */}
                         {project.sustainability && (
                            <Reveal delay={0.8}>
                                <div className="bg-white border border-gray-100 p-8 rounded-sm shadow-sm">
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <Leaf className="text-green-600" size={24} /> Sustainability & Impact
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {project.sustainability}
                                    </p>
                                </div>
                            </Reveal>
                         )}

                    </div>

                    {/* Sidebar Stats (Quick Facts) */}
                    <div className="lg:col-span-1">
                        <div className="bg-iron-50 p-8 rounded-sm sticky top-32">
                            <h3 className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-6 border-b border-gray-200 pb-4">Project Quick Facts</h3>
                            
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <Briefcase className="text-iron-900 mt-1" size={20} />
                                    <div>
                                        <span className="block text-xs font-bold text-gray-500 uppercase">Client</span>
                                        <span className="text-lg font-serif font-bold">{project.client || "Confidential"}</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <MapPin className="text-iron-900 mt-1" size={20} />
                                    <div>
                                        <span className="block text-xs font-bold text-gray-500 uppercase">Location</span>
                                        <span className="text-lg font-serif font-bold">{project.location}</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <Calendar className="text-iron-900 mt-1" size={20} />
                                    <div>
                                        <span className="block text-xs font-bold text-gray-500 uppercase">Completion</span>
                                        <span className="text-lg font-serif font-bold">{project.completionDate || "2023"}</span>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <DollarSign className="text-iron-900 mt-1" size={20} />
                                    <div>
                                        <span className="block text-xs font-bold text-gray-500 uppercase">Value</span>
                                        <span className="text-lg font-serif font-bold">{project.budget || "$25M"}</span>
                                    </div>
                                </div>

                                {project.architect && (
                                    <div className="flex items-start gap-4">
                                        <PenTool className="text-iron-900 mt-1" size={20} />
                                        <div>
                                            <span className="block text-xs font-bold text-gray-500 uppercase">Architect</span>
                                            <span className="text-lg font-serif font-bold">{project.architect}</span>
                                        </div>
                                    </div>
                                )}

                                {project.size && (
                                    <div className="flex items-start gap-4">
                                        <Ruler className="text-iron-900 mt-1" size={20} />
                                        <div>
                                            <span className="block text-xs font-bold text-gray-500 uppercase">Size</span>
                                            <span className="text-lg font-serif font-bold">{project.size}</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <Link to="/contact" className="block w-full text-center py-3 bg-iron-900 text-white font-bold uppercase tracking-wider hover:bg-gold-600 transition-colors">
                                    Discuss Similar Project
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {nextProject && (
                    <div className="mt-24 border-t border-gray-100 pt-12 flex justify-end">
                        <Link to={`/projects/${nextProject.id}`} className="group text-right">
                            <span className="block text-xs font-bold uppercase text-gray-400 mb-1">Next Project</span>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-serif font-bold text-iron-900 group-hover:text-gold-600 transition-colors">
                                    {nextProject.title}
                                </span>
                                <ChevronRight className="text-gold-500 group-hover:translate-x-2 transition-transform" />
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    </div>
  );
};

export default ProjectDetailsPage;
