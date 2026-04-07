import { Link } from 'react-router-dom';

export default function About() {
  const values = [
    { title: 'Innovation', desc: 'Constantly exploring new technologies to solve complex problems and drive business growth.', icon: '💡', color: 'text-accent-cyan' },
    { title: 'Integrity', desc: 'Building trust through honest communication and ethical business practices.', icon: '🛡️', color: 'text-primary' },
    { title: 'Excellence', desc: 'Commitment to delivering high-quality, scalable, and high-performance solutions.', icon: '🏆', color: 'text-accent-amber' },
    { title: 'Customer Success', desc: 'Our success is defined by the measurable growth and efficiency of our partners.', icon: '🤝', color: 'text-accent-purple' }
  ];

  return (
    <div className="pt-32 md:pt-40 bg-bg-primary">
      {/* About Hero */}
      <section className="relative py-24 bg-bg-dark overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="container px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-4xl">
              <span className="section-tag animate-fade-up border-accent-cyan/40 bg-accent-cyan/5 text-accent-cyan">About Us</span>
              <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-8 leading-tight tracking-tight">
                A Strategic <span className="gradient-text">Solutions Partner</span>
              </h1>
              <p className="text-xl text-text-muted leading-relaxed mb-10 max-w-2xl">
                KriShiv Tech Consultants is a strategic solutions partner specializing in technology consulting, data analytics, and digital transformation. We empower organizations to unlock growth through tailored, scalable, and innovative solutions.
              </p>
            </div>
            <div className="relative hidden lg:block">
              <div className="p-1 rounded-[32px] bg-brand shadow-2xl">
                <div className="rounded-[30px] overflow-hidden aspect-video relative group">
                  <img 
                    src="/images/hero_about.png" 
                    alt="Strategic Consultation" 
                    className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-bg-dark/20 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 p-6 glass-card border-accent-amber/20 z-20">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-amber/20 flex items-center justify-center text-xl">🛡️</div>
                    <div>
                       <p className="text-[0.6rem] font-bold text-accent-amber uppercase tracking-widest leading-none mb-1">Impact</p>
                       <p className="text-white font-bold text-xs uppercase tracking-tighter">Strategic Leadership</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand opacity-30"></div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container px-6 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 glass-card bg-bg-secondary/40 border-white/5 hover:border-accent-cyan/20">
              <div className="w-20 h-20 rounded-2xl bg-accent-cyan/10 flex items-center justify-center text-4xl mb-8 mx-auto">🎯</div>
              <h2 className="text-3xl font-heading font-bold text-gold-soft mb-6">Our Mission</h2>
              <p className="text-text-muted text-lg leading-relaxed">
                To deliver impactful technology solutions that drive efficiency, innovation, and measurable business growth for our global clients.
              </p>
            </div>
            <div className="p-12 glass-card bg-bg-secondary/40 border-white/5 hover:border-accent-purple/20">
              <div className="w-20 h-20 rounded-2xl bg-accent-purple/10 flex items-center justify-center text-4xl mb-8 mx-auto">👁️</div>
              <h2 className="text-3xl font-heading font-bold text-gold-soft mb-6">Our Vision</h2>
              <p className="text-text-muted text-lg leading-relaxed">
                To become a global leader in digital transformation and data-driven consulting, recognized for engineering excellence and strategic impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-bg-dark/40 border-y border-white/5 relative">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-cyan/5 blur-[100px] rounded-full"></div>
        <div className="container px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="p-1.5 rounded-3xl bg-brand">
                 <div className="bg-bg-dark aspect-video rounded-3xl flex items-center justify-center font-heading font-black text-white/5 text-4xl overflow-hidden relative group">
                    <img 
                      src="/images/about_approach.png" 
                      alt="Our Engineering Approach" 
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-brand opacity-10"></div>
                 </div>
              </div>
              <div className="absolute -bottom-10 -right-10 p-8 glass-card bg-bg-secondary border-accent-cyan/20 hidden lg:block animate-fade-up">
                 <p className="text-sm font-bold text-gold-soft uppercase tracking-widest mb-2">Since 2026</p>
                 <p className="text-white text-lg font-medium">Digital Leadership</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <span className="section-tag border-accent-amber/40 bg-accent-amber/5 text-accent-amber">Our Approach</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">Combining Deep <span className="text-accent-cyan">Expertise</span> & Agile Methods</h2>
              </div>
              <p className="text-text-muted text-lg leading-relaxed">
                We combine deep technical expertise, industry knowledge, and agile methodologies to deliver scalable and future-ready solutions.
              </p>
              <ul className="space-y-5">
                {[
                  'Deep technical expertise in Guidewire & Snowflake',
                  'Strategic Industry knowledge (Insurance, Finance)',
                  'Agile methodologies for fast, effective delivery'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-5 group">
                    <div className="w-3 h-3 rounded-full bg-brand-gradient group-hover:scale-125 transition-transform"></div>
                    <span className="text-white font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-white/5">
                <blockquote className="italic text-text-muted border-l-4 border-accent-amber/40 pl-6 py-2">
                   "We align technology with your business goals to deliver impactful, scalable results."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="container px-6 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <span className="section-tag border-accent-purple/40 bg-accent-purple/5 text-accent-purple">Our Values</span>
            <h2 className="text-4xl font-heading font-bold text-white mb-6 tracking-tight">Core Values & <span className="text-gold-soft">Philosophy</span></h2>
            <p className="text-text-muted">Built on trust, transparency, and relentless pursuit of excellence.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="p-8 glass-card border-white/5 hover:border-accent-cyan/30 group">
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform">{v.icon}</div>
                <h3 className={`text-2xl font-heading font-bold mb-4 ${v.color}`}>{v.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container px-6">
           <div className="p-12 md:p-20 bg-gradient-to-br from-bg-dark to-bg-secondary rounded-[40px] border border-white/10 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/10 blur-[100px] rounded-full"></div>
              <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                 <h2 className="text-4xl font-heading font-bold text-white mb-8">Ready to grow with a strategic partner?</h2>
                 <Link to="/contact" className="btn btn-primary px-12 py-5 text-xl uppercase font-bold tracking-widest shadow-2xl">
                    Partner with us today
                 </Link>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
