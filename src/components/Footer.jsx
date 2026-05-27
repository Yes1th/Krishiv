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
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-brand opacity-60"></div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Brand */}
          <div className="lg:col-span-4 flex flex-col gap-8 items-start">
            <Link to="/" className="flex items-center gap-4 group -ml-4 lg:-ml-16">
              <img src={logo} alt="KriShiv Tech Logo" className="h-40 w-auto object-contain hover:scale-105 transition-transform" />
            </Link>

            <p className="text-text-muted text-base leading-relaxed max-w-sm">
              Empowering global organizations through strategic technology consulting, cloud-native engineering, and data-driven innovation.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {[
                {
                  label: 'LinkedIn',
                  icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5z',
                  href: 'https://www.linkedin.com/company/krishiv-tech-consultants-llc/about/?viewAsMember=true'
                },
                {
                  label: 'Facebook',
                  icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12',
                  href: '#'
                },
                {
                  label: 'X',
                  icon: 'M18.244 2.25h3.308l-7.227 8.26',
                  href: '#'
                }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href !== '#' ? "_blank" : undefined}
                  rel={social.href !== '#' ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-cyan/10 hover:text-accent-cyan transition"
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
            <h4 className="text-white text-sm font-bold uppercase">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-text-muted hover:text-accent-cyan text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="text-white text-sm font-bold uppercase">Our Services</h4>
            <ul className="flex flex-col gap-4">
              {services.map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-text-muted hover:text-accent-cyan text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="text-white text-sm font-bold uppercase">Get In Touch</h4>

            <div className="flex flex-col gap-5">

              {/* Location */}
              <div className="flex gap-3">
                <span>📍</span>
                <div>
                  <p className="text-xs text-text-muted">Location</p>
                  <p className="text-sm text-text-muted">11400 Airport Road, Suite 200, Everett, WA 98204</p>
                </div>
              </div>

              {/* Email 1 */}
              <div className="flex gap-3">
                <span>✉️</span>
                <div>
                  <p className="text-xs text-text-muted">General Inquiry</p>
                  <a href="mailto:info@krishivtechconsultants.com" className="text-sm text-text-muted hover:text-accent-cyan">
                    HR@krishivtechconsultants.com
                  </a>
                </div>
              </div>

              {/* Email 2 */}
              <div className="flex gap-3">
                <span>✉️</span>
                <div>
                  <p className="text-xs text-text-muted">Business Contact</p>
                  <a href="mailto:hr@krishivtechconsultants.com" className="text-sm text-text-muted hover:text-accent-cyan">
                    Krishnapriyakamini@krishivtechconsultants.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <span>📞</span>
                <div>
                  <p className="text-xs text-text-muted">Phone</p>
                  <a href="tel:+16577726864" className="text-sm text-text-muted hover:text-accent-cyan">
                    +1 657-772-6864
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-text-muted">
            © {year} KriShiv Tech Consultants LLC. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-text-muted hover:text-accent-cyan">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-text-muted hover:text-accent-cyan">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
