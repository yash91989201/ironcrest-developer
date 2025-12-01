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
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen ? 'bg-iron-900/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-gold-600 rounded-sm text-white group-hover:bg-gold-500 transition-colors">
            <Hammer size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-widest uppercase font-serif text-white">
              Ironcrest
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-gray-300">
              Developers
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-gold-500 relative group ${
                isActive(link.href) ? 'text-gold-500' : 'text-white'
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
          className="md:hidden text-white hover:text-gold-500 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-iron-900 z-40 transform transition-transform duration-300 md:hidden flex flex-col items-center justify-center gap-8 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            onClick={() => setIsMenuOpen(false)}
            className={`text-2xl font-serif hover:text-gold-500 transition-colors ${isActive(link.href) ? 'text-gold-500' : 'text-white'}`}
          >
            {link.name}
          </Link>
        ))}
        <Link
            to="/request-quote"
            onClick={() => setIsMenuOpen(false)}
            className="px-8 py-3 bg-gold-600 hover:bg-gold-500 text-white text-lg font-bold uppercase tracking-wider rounded-sm shadow-lg"
        >
            Get a Quote
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;