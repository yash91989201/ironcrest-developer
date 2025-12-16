import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { jobs } from '../data';
import { Briefcase, Heart, TrendingUp, ShieldCheck, MapPin, Clock, X, Send, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const CareersPage: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<typeof jobs[0] | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    resume: null as File | null
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleApplyClick = (job: typeof jobs[0]) => {
    setSelectedJob(job);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedJob(null);
    setFormData({ name: '', email: '', phone: '', message: '', resume: null });
    setFormErrors({});
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Here you would typically send the data to your backend
    console.log('Application submitted:', { job: selectedJob, ...formData });

    setIsSubmitting(false);
    setIsDialogOpen(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
    setFormData({ name: '', email: '', phone: '', message: '', resume: null });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (10MB limit)
      const maxSize = 10 * 1024 * 1024; // 10MB in bytes
      if (file.size > maxSize) {
        setFormErrors(prev => ({
          ...prev,
          resume: 'File size must be less than 10MB'
        }));
        return;
      }

      // Check file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        setFormErrors(prev => ({
          ...prev,
          resume: 'Please upload a PDF, DOC, or DOCX file'
        }));
        return;
      }

      setFormData(prev => ({ ...prev, resume: file }));
      setFormErrors(prev => ({ ...prev, resume: '' }));
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      errors.message = 'Cover letter/message is required';
    } else if (formData.message.trim().length < 50) {
      errors.message = 'Cover letter must be at least 50 characters';
    }

    if (!formData.resume) {
      errors.resume = 'Resume is required';
    }

    // Phone validation (optional but if provided, should be valid)
    if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      errors.phone = 'Please enter a valid phone number';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

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
                  <button
                    type="button"
                    onClick={() => handleApplyClick(job)}
                    className="px-8 py-3 bg-iron-900 text-white font-bold uppercase tracking-wider hover:bg-gold-600 transition-colors whitespace-nowrap"
                  >
                    Apply Now
                  </button>
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

      {/* Application Dialog */}
      <AnimatePresence>
        {isDialogOpen && selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50 p-4"
            onClick={handleCloseDialog}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-serif font-bold text-iron-900">
                    Apply for Position
                  </h3>
                  <button
                    type="button"
                    onClick={handleCloseDialog}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="mb-6 p-4 bg-iron-50 rounded-sm">
                  <h4 className="font-bold text-iron-900">{selectedJob.title}</h4>
                  <p className="text-sm text-gray-600">
                    {selectedJob.department} • {selectedJob.location} • {selectedJob.type}
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    />
                    {formErrors.phone && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                      Resume/CV *
                    </label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    />
                    {formData.resume && (
                      <p className="mt-1 text-sm text-green-600">
                        Selected: {formData.resume.name} ({(formData.resume.size / 1024 / 1024).toFixed(2)} MB)
                      </p>
                    )}
                    {formErrors.resume && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.resume}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Cover Letter / Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-vertical"
                    />
                    {formErrors.message && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.message}</p>
                    )}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={handleCloseDialog}
                      className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-sm hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 px-4 py-2 bg-iron-900 text-white rounded-sm hover:bg-gold-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : (
                        <Send size={16} />
                      )}
                      {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 flex items-center gap-3"
          >
            <div className="flex-1">
              <p className="font-medium">Application Submitted!</p>
              <p className="text-sm opacity-90">We have received your request, we will contact you shortly.</p>
            </div>
            <button
              type="button"
              onClick={() => setShowToast(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CareersPage;
