import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/industries', label: 'Industries' },
    { path: '/differentiators', label: 'Why Us' },
    { path: '/contact', label: 'Contact' },
  ];

  const services = [
    'Guidewire Implementation',
    'Cloud Engineering (AWS)',
    'Data Warehousing (Snowflake)',
    'Generative AI Solutions',
    'Legacy Modernization',
    'ETL Automation',
  ];

  return (
    <footer className="relative bg-bg-dark border-t border-white/5 overflow-hidden">
      {/* Signature Gradient Top Border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-brand opacity-60"></div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand & Social */}
          <div className="lg:col-span-4 flex flex-col gap-8 items-start">
            <Link to="/" className="flex items-center gap-4 group -ml-4 lg:-ml-16">
              <img src={logo} alt="KriShiv Tech Logo" className="h-40 w-auto object-contain transition-transform hover:scale-105" />
            </Link>
            
            <p className="text-text-muted text-base leading-relaxed max-w-sm">
              Empowering global organizations through strategic technology consulting, cloud-native engineering, and data-driven innovation.
            </p>

            <div className="flex items-center gap-4">
              {[
                { label: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z', href: 'https://www.linkedin.com/company/krishiv-tech-consultants-llc/about/?viewAsMember=true' },
                { label: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', href: '#' },
                { label: 'X', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z', href: '#' }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target={social.href !== '#' ? "_blank" : undefined}
                  rel={social.href !== '#' ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-text-muted transition-all duration-300 hover:bg-accent-cyan/10 hover:border-accent-cyan/40 hover:text-accent-cyan hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-[0.1em]">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-text-muted text-sm font-medium transition-colors hover:text-accent-cyan flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/40 group-hover:bg-accent-cyan transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-[0.1em]">Our Services</h4>
            <ul className="flex flex-col gap-4">
              {services.map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-text-muted text-sm font-medium transition-colors hover:text-accent-cyan flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/40 group-hover:bg-accent-cyan transition-colors"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-[0.1em]">Get In Touch</h4>
            <div className="flex flex-col gap-5">
              {[
                { label: 'Location', value: '11415 8th PL W, UNIT A, Everett, WA 98204', icon: '📍' },
                { label: 'Email', value: 'info@krishivtech.com', icon: '✉️', isLink: true, href: 'mailto:info@krishivtech.com' },
                { label: 'Phone', value: '+1 657-772-6864', icon: '📞', isLink: true, href: 'tel:+16577726864' }
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="text-lg grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[0.65rem] font-bold text-text-muted uppercase tracking-widest leading-none mb-1">{item.label}</span>
                    {item.isLink ? (
                      <a href={item.href} className="text-text-muted text-sm font-medium transition-colors hover:text-accent-cyan">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-text-muted text-sm font-medium">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-text-muted text-sm font-medium">
            © {year} KriShiv Tech Consultants LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link to="/privacy" className="text-text-muted text-sm hover:text-accent-cyan transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-text-muted text-sm hover:text-accent-cyan transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
