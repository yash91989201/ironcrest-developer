import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Reveal } from '../components/Reveal';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, UploadCloud, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const RequestQuotePage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    country: '',
    industry: '',
    // Step 2
    projectType: '',
    budget: '',
    startDate: '',
    location: '',
    // Step 3
    description: '',
    file: null as File | null,
    requirements: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const totalSteps = 4;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
        setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[name];
            return newErrors;
        });
    }
  };

  const validateStep = (step: number) => {
      const newErrors: Record<string, string> = {};
      let isValid = true;

      if (step === 1) {
          if (!formData.companyName) newErrors.companyName = "Company Name is required";
          if (!formData.contactPerson) newErrors.contactPerson = "Contact Person is required";
          if (!formData.email) newErrors.email = "Email Address is required";
          if (!formData.phone) newErrors.phone = "Phone Number is required";
          if (!formData.country) newErrors.country = "Country is required";
          if (!formData.industry) newErrors.industry = "Industry Sector is required";
      }

      if (step === 2) {
          if (!formData.projectType) newErrors.projectType = "Project Type is required";
          if (!formData.budget) newErrors.budget = "Estimated Budget is required";
      }

      if (Object.keys(newErrors).length > 0) {
          setErrors(newErrors);
          isValid = false;
      }
      return isValid;
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
        setCurrentStep(prev => Math.min(prev + 1, totalSteps));
        window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Simulate API call
      setTimeout(() => {
          setIsSubmitted(true);
          window.scrollTo(0, 0);
      }, 1000);
  };

  // Step Components
  const renderStep1 = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-iron-900 border-b border-gray-200 pb-2 mb-6">Basic Information</h3>
        </div>
        
        <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Company Name *</label>
            <input 
                type="text" 
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className={`w-full p-3 border rounded-sm focus:outline-none focus:border-gold-500 transition-colors ${errors.companyName ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                placeholder="Enter company name"
            />
            {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
        </div>

        <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Contact Person *</label>
            <input 
                type="text" 
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                className={`w-full p-3 border rounded-sm focus:outline-none focus:border-gold-500 transition-colors ${errors.contactPerson ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                placeholder="Full Name"
            />
             {errors.contactPerson && <p className="text-red-500 text-xs mt-1">{errors.contactPerson}</p>}
        </div>

        <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
            <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border rounded-sm focus:outline-none focus:border-gold-500 transition-colors ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                placeholder="email@company.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
            <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full p-3 border rounded-sm focus:outline-none focus:border-gold-500 transition-colors ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
                placeholder="+1 (555) 000-0000"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Country *</label>
            <select 
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`w-full p-3 border rounded-sm focus:outline-none focus:border-gold-500 transition-colors ${errors.country ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
            >
                <option value="">Select Country</option>
                <option value="USA">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="UAE">United Arab Emirates</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Other">Other</option>
            </select>
            {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
        </div>

        <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Industry Sector *</label>
             <select 
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className={`w-full p-3 border rounded-sm focus:outline-none focus:border-gold-500 transition-colors ${errors.industry ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
            >
                <option value="">Select Industry</option>
                <option value="Oil & Gas">Oil & Gas</option>
                <option value="Offshore">Offshore</option>
                <option value="Renewable Energy">Renewable Energy</option>
                <option value="Petrochemicals">Petrochemicals</option>
                <option value="Infrastructure">Infrastructure</option>
                <option value="Commercial">Commercial Real Estate</option>
            </select>
            {errors.industry && <p className="text-red-500 text-xs mt-1">{errors.industry}</p>}
        </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-iron-900 border-b border-gray-200 pb-2 mb-6">Project Scope</h3>
        </div>

         <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Project Type *</label>
             <select 
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className={`w-full p-3 border rounded-sm focus:outline-none focus:border-gold-500 transition-colors ${errors.projectType ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
            >
                <option value="">Select Type</option>
                <option value="New Construction">New Construction</option>
                <option value="Expansion">Facility Expansion</option>
                <option value="Renovation">Renovation / Retrofit</option>
                <option value="Maintenance">Maintenance Contract</option>
                <option value="Consultation">Design & Consultation</option>
            </select>
            {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType}</p>}
        </div>

        <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Estimated Budget *</label>
            <select 
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className={`w-full p-3 border rounded-sm focus:outline-none focus:border-gold-500 transition-colors ${errors.budget ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}
            >
                <option value="">Select Range (USD)</option>
                <option value="<1M">$100k - $1M</option>
                <option value="1M-5M">$1M - $5M</option>
                <option value="5M-20M">$5M - $20M</option>
                <option value="20M-100M">$20M - $100M</option>
                <option value="100M+">$100M+</option>
            </select>
            {errors.budget && <p className="text-red-500 text-xs mt-1">{errors.budget}</p>}
        </div>

         <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Desired Start Date</label>
            <input 
                type="date" 
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gold-500 transition-colors"
            />
        </div>

        <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Project Location</label>
            <input 
                type="text" 
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gold-500 transition-colors"
                placeholder="City, Region (if different from HQ)"
            />
        </div>
    </div>
  );

  const renderStep3 = () => (
      <div className="grid grid-cols-1 gap-8">
        <div className="">
            <h3 className="text-xl font-bold text-iron-900 border-b border-gray-200 pb-2 mb-6">Detailed Specifications</h3>
        </div>

        <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Project Description</label>
            <textarea 
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gold-500 transition-colors"
                placeholder="Please describe the project scope, objectives, and any specific challenges..."
            ></textarea>
        </div>

        <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Special Requirements</label>
             <textarea 
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:border-gold-500 transition-colors"
                placeholder="E.g., LEED certification needed, specific safety protocols, tight deadlines..."
            ></textarea>
        </div>

        <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Upload RFP / Documents (Optional)</label>
            <div className="border-2 border-dashed border-gray-300 rounded-sm p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer relative">
                <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                <div className="flex flex-col items-center">
                    <UploadCloud size={40} className="text-gold-500 mb-2" />
                    <p className="text-sm text-gray-600 font-medium">Drag and drop or click to upload</p>
                    <p className="text-xs text-gray-400 mt-1">PDF, DOCX, XLS (Max 10MB)</p>
                </div>
            </div>
        </div>
    </div>
  );

  const renderStep4 = () => (
      <div className="space-y-6">
           <div>
            <h3 className="text-xl font-bold text-iron-900 border-b border-gray-200 pb-2 mb-6">Review Information</h3>
           </div>
           
           <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
                <h4 className="text-gold-600 font-bold uppercase tracking-widest text-xs mb-4">Contact Info</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <p><span className="font-bold">Company:</span> {formData.companyName}</p>
                    <p><span className="font-bold">Contact:</span> {formData.contactPerson}</p>
                    <p><span className="font-bold">Email:</span> {formData.email}</p>
                    <p><span className="font-bold">Phone:</span> {formData.phone}</p>
                    <p><span className="font-bold">Country:</span> {formData.country}</p>
                    <p><span className="font-bold">Industry:</span> {formData.industry}</p>
                </div>
           </div>

           <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
                <h4 className="text-gold-600 font-bold uppercase tracking-widest text-xs mb-4">Project Details</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <p><span className="font-bold">Type:</span> {formData.projectType}</p>
                    <p><span className="font-bold">Budget:</span> {formData.budget}</p>
                    <p><span className="font-bold">Start Date:</span> {formData.startDate || 'N/A'}</p>
                    <p><span className="font-bold">Location:</span> {formData.location || 'N/A'}</p>
                </div>
           </div>

           <div className="bg-gray-50 p-6 rounded-sm border border-gray-100">
                <h4 className="text-gold-600 font-bold uppercase tracking-widest text-xs mb-4">Description</h4>
                <p className="text-sm text-gray-700 whitespace-pre-wrap">{formData.description || 'No description provided.'}</p>
           </div>
      </div>
  );

  if (isSubmitted) {
      return (
        <div>
            <PageHeader 
                title="Request Submitted" 
                subtitle="Success"
                image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2800&auto=format&fit=crop"
            />
            <div className="py-24 max-w-2xl mx-auto px-6 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-green-600" size={40} />
                </div>
                <h2 className="text-3xl font-serif font-bold text-iron-900 mb-4">Thank You</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                    Your request for a quote has been successfully submitted. Our team will review your project details and get back to you within 24-48 hours with a preliminary proposal or to schedule a detailed consultation.
                </p>
                <Link to="/" className="px-8 py-3 bg-iron-900 text-white font-bold uppercase tracking-wider hover:bg-gold-600 transition-colors">
                    Return Home
                </Link>
            </div>
        </div>
      );
  }

  return (
    <div>
       <PageHeader 
        title="Project Information" 
        subtitle="Request for Quote"
        image="https://images.unsplash.com/photo-1590486803833-1c5dc8ce84ac?q=80&w=2800&auto=format&fit=crop"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
             <div className="text-center mb-12">
                <Reveal>
                    <p className="text-gray-600 text-lg">
                        Please provide detailed information about your project to help us prepare an accurate quote.
                    </p>
                </Reveal>
             </div>

             <div className="bg-white shadow-2xl rounded-sm overflow-hidden">
                 {/* Progress Bar */}
                 <div className="bg-gray-100 h-2 w-full">
                     <div 
                        className="bg-gold-500 h-full transition-all duration-500 ease-out"
                        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                     ></div>
                 </div>

                 <div className="p-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center text-xs font-bold uppercase tracking-wider text-gray-500">
                     <span>Step {currentStep} of {totalSteps}</span>
                     <span>{currentStep === 1 ? 'Basic Info' : currentStep === 2 ? 'Project Scope' : currentStep === 3 ? 'Details' : 'Review'}</span>
                 </div>

                 <div className="p-8 md:p-12">
                     <form onSubmit={handleSubmit}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {currentStep === 1 && renderStep1()}
                                {currentStep === 2 && renderStep2()}
                                {currentStep === 3 && renderStep3()}
                                {currentStep === 4 && renderStep4()}
                            </motion.div>
                        </AnimatePresence>

                        <div className="mt-12 flex justify-between pt-6 border-t border-gray-100">
                             {currentStep > 1 ? (
                                 <button 
                                    type="button" 
                                    onClick={prevStep}
                                    className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-600 font-bold uppercase tracking-wider hover:bg-gray-50 transition-colors"
                                 >
                                    <ChevronLeft size={18} /> Previous
                                 </button>
                             ) : (
                                 <div></div>
                             )}

                             {currentStep < totalSteps ? (
                                  <button 
                                    type="button" 
                                    onClick={nextStep}
                                    className="flex items-center gap-2 px-8 py-3 bg-iron-900 text-white font-bold uppercase tracking-wider hover:bg-gold-600 transition-colors"
                                  >
                                    Next Step <ChevronRight size={18} />
                                  </button>
                             ) : (
                                  <button 
                                    type="submit" 
                                    className="flex items-center gap-2 px-8 py-3 bg-gold-600 text-white font-bold uppercase tracking-wider hover:bg-gold-500 transition-colors shadow-lg hover:shadow-xl"
                                  >
                                    Submit Request <CheckCircle size={18} />
                                  </button>
                             )}
                        </div>
                     </form>
                 </div>
             </div>
             
             {/* Security Note */}
             <div className="mt-8 flex items-center justify-center gap-2 text-gray-400 text-xs">
                 <AlertCircle size={14} />
                 <span>Your information is encrypted and securely processed.</span>
             </div>
        </div>
      </section>
    </div>
  );
};

export default RequestQuotePage;