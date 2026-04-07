import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../assets/logo.png';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/industries', label: 'Industries' },
  { path: '/differentiators', label: 'Why Us' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      if (menuOpen) setMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 ${
        scrolled ? 'bg-bg-primary/90 backdrop-blur-2xl border-b border-white/5 py-3 shadow-2xl' : 'bg-transparent'
      }`} 
      ref={menuRef}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 -ml-4 lg:-ml-12">
            <img src={logo} alt="KriShiv Tech Logo" className="h-28 w-auto object-contain transition-transform hover:scale-110" />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.path 
                      ? 'text-accent-cyan bg-accent-cyan/10' 
                      : 'text-text-secondary hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link to="/contact" className="hidden lg:inline-flex btn btn-primary px-6 py-2.5 text-sm uppercase tracking-wider">
            Get in Touch
          </Link>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors group"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-[2px] w-full bg-text-secondary rounded-full transition-all duration-300 origin-center ${menuOpen ? 'translate-y-2 rotate-45 bg-accent-cyan' : ''}`}></span>
              <span className={`block h-[2px] w-full bg-text-secondary rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
              <span className={`block h-[2px] w-full bg-text-secondary rounded-full transition-all duration-300 origin-center ${menuOpen ? '-translate-y-2 -rotate-45 bg-accent-cyan' : ''}`}></span>
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-bg-dark/80 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Mobile Side Menu */}
      <div className={`lg:hidden fixed inset-y-0 right-0 h-screen w-[280px] z-50 transition-transform duration-500 ease-in-out border-l border-white/5 shadow-2xl bg-bg-secondary/95 backdrop-blur-3xl ${
        menuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-white/5 flex items-center justify-between">
            <span className="font-heading font-bold text-lg text-white tracking-tight">Navigation</span>
            <button 
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-white/5 text-text-secondary"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
          <ul className="p-6 flex flex-col gap-1 overflow-y-auto flex-grow">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    location.pathname === link.path 
                      ? 'text-accent-cyan bg-accent-cyan/10' 
                      : 'text-text-secondary hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="p-6 border-t border-white/5 bg-bg-dark/50">
            <Link to="/contact" className="w-full btn btn-primary py-4 text-base shadow-lg shadow-primary/20">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
