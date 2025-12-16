import React from 'react';
import { Hammer, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-iron-900 text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-gold-600 rounded-sm text-white">
                <Hammer size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-widest uppercase font-serif">
                  Ironcrest
                </span>
                <span className="text-[9px] tracking-[0.3em] uppercase text-gray-400">
                  Developers
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building the foundations of tomorrow with integrity, precision, and unparalleled craftsmanship.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-gold-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-gold-500 transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-gold-500 transition-colors">Projects</Link></li>
              <li><Link to="/careers" className="hover:text-gold-500 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-gold-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Commercial Construction</li>
              <li>Luxury Residential</li>
              <li>Project Management</li>
              <li>Site Excavation</li>
              <li>Renovations</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-6">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-gold-600 transition-colors">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-gold-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="http://linkedin.ironcrestdevelopers.com/" target="_blank" className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-gold-600 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Ironcrest Developers. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
