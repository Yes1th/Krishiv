import { Link } from 'react-router-dom';

const services = [
  { 
    title: 'Guidewire Implementation', 
    desc: 'End-to-end configuration, integration, and performance tuning for PolicyCenter and more.',
    icon: '🏢',
    tag: 'Insurance',
    color: 'text-primary',
    image: '/images/service_guidewire.png'
  },
  { 
    title: 'Cloud Engineering', 
    desc: 'Expert AWS cloud architecture design and cloud-native transformations.',
    icon: '☁️',
    tag: 'Cloud',
    color: 'text-accent-cyan',
    image: '/images/service_cloud.png'
  },
  { 
    title: 'Data Warehousing', 
    desc: 'Scalable Snowflake implementations and data pipeline automation with Python & SQL.',
    icon: '❄️',
    tag: 'Data',
    color: 'text-accent-amber',
    image: '/images/service_data.png'
  },
  { 
    title: 'Generative AI', 
    desc: 'Cutting-edge AI solutions and business process automation using Databricks.',
    icon: '🤖',
    tag: 'AI',
    color: 'text-accent-purple',
    image: '/images/service_ai.png'
  },
  { 
    title: 'Legacy Modernization', 
    desc: 'Bridging the gap between legacy systems and modern, agile architectures.',
    icon: '🔄',
    tag: 'Modernize',
    color: 'text-accent-pink',
    image: '/images/service_modernize.png'
  },
  { 
    title: 'Digital Transformation', 
    desc: 'Strategic consultancy to drive efficiency, innovation, and business growth.',
    icon: '🚀',
    tag: 'Strategic',
    color: 'text-gold-soft',
    image: '/images/service_strategic.png'
  }
];


export default function Home() {
  return (
    <div className="pt-32 md:pt-40 bg-bg-primary">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent-purple/10 rounded-full blur-[100px] animate-pulse delay-700"></div>

        <div className="container relative z-10 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-up">
              <span className="section-tag border-accent-cyan/40 text-accent-cyan bg-accent-cyan/5">Your Partner in Transformation</span>
              <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                Transforming Businesses Through <span className="gradient-text">Technology & Data</span>
              </h1>
              <p className="text-lg md:text-xl text-text-secondary mb-10 leading-relaxed max-w-2xl mx-auto">
                Your trusted partner in digital transformation, cloud engineering, and advanced data solutions. Bridging legacy systems with modern cloud-native architectures.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" className="btn btn-primary w-full sm:w-auto px-10 py-4 sm:py-5 text-base sm:text-lg uppercase tracking-wider">
                  Get Started
                </Link>
                <Link to="/about" className="btn btn-outline w-full sm:w-auto px-10 py-4 sm:py-5 text-base sm:text-lg uppercase tracking-wider">
                  About Preview
                </Link>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Services Highlights */}
      <section className="py-24 bg-bg-dark/40">
        <div className="container px-6">
          <div className="text-center mb-16">
            <span className="section-tag border-accent-amber/40 text-accent-amber bg-accent-amber/5">Service Highlights</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gold-soft mb-4">Core Competencies</h2>
            <p className="text-text-muted max-w-xl mx-auto">
              We specialize in complex technology ecosystems to drive business value through engineering excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="glass-card group border-white/5 hover:border-accent-cyan/30 overflow-hidden flex flex-col">
                <div className="h-40 w-full overflow-hidden relative">
                   <img src={s.image} alt={s.title} className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent opacity-60"></div>
                   <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10`}>
                      {s.icon}
                   </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                   <span className={`text-[0.65rem] font-bold ${s.color} uppercase tracking-[0.2em] mb-2 block`}>{s.tag}</span>
                   <h3 className="text-2xl font-heading font-bold text-white mb-4 tracking-tight">{s.title}</h3>
                   <p className="text-text-muted text-sm leading-relaxed mb-8 flex-grow">
                     {s.desc}
                   </p>
                   <Link to="/services" className="text-accent-cyan text-sm font-bold flex items-center gap-2 group/link border-t border-white/5 pt-6">
                     Detailed Services
                     <span className="transition-transform group-hover/link:translate-x-1">→</span>
                   </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-bg-primary">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div>
                <span className="section-tag border-accent-pink/40 text-accent-pink bg-accent-pink/5">Why Choose Us</span>
                <h2 className="text-4xl font-heading font-bold text-white mb-6 leading-tight">Expertise That <span className="text-accent-cyan">Scales</span></h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: 'Deep Industry Expertise', desc: 'Specialized in insurance and data ecosystems.', icon: '🏢' },
                  { title: 'Certified Professionals', desc: 'Snowflake, AWS, and AI experts.', icon: '🛡️' },
                  { title: 'Agile Delivery Model', desc: 'Fast and efficient project execution.', icon: '⚡' },
                  { title: 'Business-Focused', desc: 'Aligning tech with your growth goals.', icon: '🎯' }
                ].map((item, i) => (
                  <div key={i} className="space-y-3">
                    <div className="text-2xl">{item.icon}</div>
                    <h4 className="text-lg font-heading font-bold text-gold-soft">{item.title}</h4>
                    <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative p-2 rounded-[32px] bg-brand">
                 <div className="aspect-square bg-bg-secondary rounded-[30px] flex items-center justify-center p-12 overflow-hidden relative group">
                    <img 
                      src="/images/home_why_us.png" 
                      alt="Engineering Excellence" 
                      className="w-full h-full object-cover rounded-2xl opacity-40 group-hover:opacity-60 transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-brand opacity-10 group-hover:opacity-20 transition-opacity"></div>
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-bg-dark/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                       <span className="text-[0.65rem] font-bold text-white uppercase tracking-[0.3em]">Engineering Excellence</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success-stories" className="py-24 bg-bg-dark/60 border-y border-white/5 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent-purple/5 rounded-full blur-[120px]"></div>

        <div className="container px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="section-tag border-accent-cyan/30 text-accent-cyan bg-accent-cyan/5 animate-fade-up">Success Stories</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 tracking-tighter uppercase">Project <span className="text-accent-cyan">Showcase</span></h2>
            <p className="text-text-muted max-w-xl mx-auto font-medium">
              Transforming complex challenges into scalable digital solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Underwriting Automation', tag: 'Insurance', image: '/images/success_insurance.png', color: 'border-accent-cyan/30' },
              { title: 'Cloud Data Platform', tag: 'Cloud', image: '/images/success_finance.png', color: 'border-accent-amber/30' },
              { title: 'AI Business Intelligence', tag: 'AI', image: '/images/success_enterprise.png', color: 'border-accent-purple/30' }
            ].map((s, i) => (
              <div key={i} className={`glass-card bg-bg-secondary/30 ${s.color} group hover:-translate-y-2 transition-all duration-500 overflow-hidden`}>
                <div className="aspect-video overflow-hidden relative">
                   <img src={s.image} alt={s.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent opacity-80"></div>
                   <div className="absolute bottom-4 left-4">
                      <span className="text-[0.6rem] font-bold text-accent-cyan uppercase tracking-widest">{s.tag} Success</span>
                   </div>
                </div>
                <div className="p-6">
                   <h4 className="text-xl font-heading font-bold text-white mb-2">{s.title}</h4>
                   <div className="flex items-center gap-2 text-text-muted text-xs font-bold uppercase tracking-widest">
                      <span className="w-8 h-[1px] bg-white/20"></span>
                      Case Study
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container px-6">
          <div className="relative p-12 md:p-20 rounded-[40px] bg-bg-dark border border-white/5 overflow-hidden text-center">
            <div className="absolute top-0 right-0 p-32 bg-accent-cyan/5 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 p-32 bg-accent-purple/5 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">Ready to transform your <span className="text-gold-soft uppercase">business</span>?</h2>
              <p className="text-xl text-text-muted mb-12 leading-relaxed">
                👉 Let’s build the future together. Partner with KriShiv Tech Consultants today.
              </p>
              <Link to="/contact" className="btn btn-primary w-full sm:w-auto px-10 sm:px-14 py-4 sm:py-6 text-lg sm:text-xl uppercase tracking-widest font-bold">
                Work With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
