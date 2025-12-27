import React, { useState, useEffect } from 'react';
import { Menu, X, Hammer } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  // Helper to check active state
  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  }

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || isMenuOpen ? 'bg-iron-900/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="Ironcrest Developers" className="h-40 w-auto xl:h-24 group-hover:scale-105 transition-transform" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-gold-500 relative group ${isActive(link.href) ? 'text-gold-500' : 'text-white'
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gold-500 transition-all duration-300 ${isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
            <Link
              to="/request-quote"
              className="px-6 py-2 bg-gold-600 hover:bg-gold-500 text-white text-sm font-bold uppercase tracking-wider transition-all transform hover:-translate-y-1 rounded-sm shadow-lg"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white hover:text-gold-500 transition-colors z-70"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Outside nav to avoid height constraints */}
      <div
        className={`fixed inset-0 bg-iron-900 z-60 transform transition-all duration-500 ease-out md:hidden ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
          }`}
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-600/5 rounded-full blur-3xl"></div>

        {/* Close button - top right corner */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 p-3 text-white hover:text-gold-500 hover:rotate-90 transition-all duration-300 hover:scale-110 z-70"
          aria-label="Close menu"
        >
          <X size={32} />
        </button>

        {/* Menu content */}
        <div className="h-full flex flex-col items-center justify-center gap-1 px-8">
          {/* Logo section */}
          <div className={`mb-8 transition-all duration-700 delay-100 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <img src="/logo.png" alt="Ironcrest Developers" className="h-16 w-auto mx-auto" />
          </div>

          {/* Gold accent line */}
          <div className={`w-16 h-0.5 bg-linear-to-r from-transparent via-gold-500 to-transparent mb-6 transition-all duration-700 delay-200 ${isMenuOpen ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>

          {/* Navigation links with staggered animation */}
          <nav className="flex flex-col items-center gap-6 mb-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl font-serif hover:text-gold-500 transition-all duration-300 hover:scale-110 relative group py-2 ${isActive(link.href) ? 'text-gold-500' : 'text-white'
                  } ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{
                  transitionDelay: isMenuOpen ? `${300 + index * 50}ms` : '0ms'
                }}
              >
                {link.name}
                {/* Active indicator */}
                {isActive(link.href) && (
                  <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-0.5 bg-gold-500"></span>
                )}
                {/* Hover underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Gold accent line */}
          <div className={`w-16 h-0.5 bg-linear-to-r from-transparent via-gold-500 to-transparent mb-8 transition-all duration-700 delay-500 ${isMenuOpen ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>

          {/* CTA button */}
          <Link
            to="/request-quote"
            onClick={() => setIsMenuOpen(false)}
            className={`px-10 py-4 bg-gold-600 hover:bg-gold-500 text-white text-lg font-bold uppercase tracking-wider rounded-sm shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-gold-600/50 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{
              transitionDelay: isMenuOpen ? '600ms' : '0ms'
            }}
          >
            Get a Quote
          </Link>

          {/* Bottom decoration */}
          <div className={`mt-12 text-xs text-gray-500 uppercase tracking-widest transition-all duration-700 delay-700 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Building Excellence
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
