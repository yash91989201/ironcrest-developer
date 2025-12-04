import React, { useState } from 'react';
import { Reveal, SlideIn } from './Reveal';
import { MapPin, Phone, Mail, Sparkles, Loader2 } from 'lucide-react';
import { consultProject } from '../services/geminiService';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConsultation = async () => {
    if (!formData.message) return;
    setLoading(true);
    setAiResponse(null);
    const response = await consultProject(formData.message);
    setAiResponse(response);
    setLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to backend
    alert("Thank you. Your message has been sent to our team.");
  };

  return (
    <section id="contact" className="py-24 bg-iron-900 relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-iron-800/30 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">

          <div className="lg:w-1/3 text-white">
            <SlideIn>
              <h3 className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-2">Get In Touch</h3>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                Let's Build <br /> Together.
              </h2>
              <p className="text-gray-400 mb-10 leading-relaxed">
                Ready to start your next project? Whether it's a commercial tower or a custom estate, our team is ready to bring your vision to concrete reality.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-gold-500 mt-1" />
                  <div>
                    <h5 className="font-bold text-lg">Headquarters</h5>
                    <p className="text-gray-400">1200 Steel Ave, Suite 500<br />Metropolis, NY 10012</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-gold-500 mt-1" />
                  <div>
                    <h5 className="font-bold text-lg">Phone</h5>
                    <p className="text-gray-400">+91 7943494755</p>
                    <p className="text-gray-400">+91 7943494756</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-gold-500 mt-1" />
                  <div>
                    <h5 className="font-bold text-lg">Email</h5>
                    <p className="text-gray-400">
                      Contact@ironcrestdevelopers.com<br />
                      Info@ironcrestdevelopers.com
                    </p>
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>

          <div className="lg:w-2/3">
            <Reveal delay={0.2}>
              <div className="bg-white p-8 md:p-12 shadow-2xl rounded-sm">
                <h3 className="text-2xl font-serif font-bold text-iron-900 mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-gold-500 transition-colors bg-transparent"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-gold-500 transition-colors bg-transparent"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">Project Details</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-gold-500 transition-colors bg-transparent resize-none"
                      placeholder="Tell us about your project goals, location, and timeline..."
                      required
                    ></textarea>
                  </div>

                  {/* AI Feature */}
                  <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between border-t border-gray-100 pt-6">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-iron-900 text-white font-bold uppercase tracking-wider hover:bg-gold-600 transition-colors"
                    >
                      Send Request
                    </button>

                    <button
                      type="button"
                      onClick={handleConsultation}
                      disabled={loading || !formData.message}
                      className="flex items-center gap-2 text-gold-600 text-sm font-bold uppercase tracking-wider hover:text-gold-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />}
                      AI Project Analysis
                    </button>
                  </div>
                </form>

                {aiResponse && (
                  <div className="mt-8 p-6 bg-iron-50 border-l-4 border-gold-500 animate-fade-in">
                    <h4 className="text-iron-900 font-bold mb-2 flex items-center gap-2">
                      <Sparkles size={16} className="text-gold-500" />
                      Consultant's Preliminary Analysis
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">
                      {aiResponse}
                    </p>
                  </div>
                )}
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
