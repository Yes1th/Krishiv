import { Link } from 'react-router-dom';

const industries = [
  {
    title: 'Insurance',
    icon: '🛡️',
    description: 'Specializing in Guidewire ecosystems and claim/policy system optimization. We help carriers modernize their core systems for the digital age.',
    solutions: ['Guidewire PolicyCenter', 'Claims System Optimization', 'Underwriting Automation', 'InsureTech Integration'],
    tag: 'Insurance Ecosystems',
    color: 'text-accent-cyan',
    image: '/images/success_insurance.png'
  },
  {
    title: 'Finance',
    icon: '💰',
    description: 'From secure cloud infrastructure to complex data analytics, we empower financial institutions to manage risk and scale operations.',
    solutions: ['Secure Data Warehousing', 'Real-time Analytics', 'Compliance Monitoring', 'Digital Banking Solutions'],
    tag: 'Financial Solutions',
    color: 'text-accent-amber',
    image: '/images/success_finance.png'
  },
  {
    title: 'Enterprise Businesses',
    icon: '🏢',
    description: 'Helping large-scale organizations leverage cloud engineering and process automation to drive efficiency and innovation.',
    solutions: ['Enterprise Resource Planning', 'Cloud Migration', 'Business Process Automation', 'Legacy System Integration'],
    tag: 'Enterprise Scalability',
    color: 'text-accent-purple',
    image: '/images/success_enterprise.png'
  }
];

export default function Industries() {
  return (
    <div className="pt-32 md:pt-40 bg-bg-primary">
      {/* Industries Hero */}
      <section className="relative py-24 bg-bg-dark overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-accent-cyan/5 blur-[120px] rounded-full"></div>
        <div className="container px-6 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="section-tag border-accent-cyan/40 bg-accent-cyan/5 text-accent-cyan uppercase mb-6">Domain Focus</span>
                <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-8 tracking-tighter">
                  Industries We <span className="gradient-text uppercase">Empower</span>
                </h1>
                <p className="text-xl text-text-muted max-w-2xl leading-relaxed">
                  We deliver high-impact digital solutions that bridge the gap between legacy systems and modern architectures in specialized sectors.
                </p>
              </div>
              <div className="relative hidden lg:block">
                 <div className="p-1 rounded-[32px] bg-brand shadow-2xl">
                    <div className="rounded-[30px] overflow-hidden aspect-video">
                       <img src="/images/hero_industries.png" alt="Strategic Industry Vision" className="w-full h-full object-cover" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand opacity-30"></div>
      </section>

      {/* Industry Cards */}
      <section className="py-24 bg-bg-primary">
        <div className="container px-6 flex flex-col gap-12">
          {industries.map((ind, i) => (
            <div key={ind.title} className={`glass-card p-10 md:p-16 flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 relative overflow-hidden group border-white/5 hover:border-accent-cyan/40 transition-all duration-500 shadow-2xl bg-bg-secondary/30`}>
              {/* Background Glow */}
               <div className="absolute top-0 left-0 w-64 h-64 bg-accent-cyan/5 blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="lg:w-1/2 space-y-8 relative z-10">
                <div className="flex items-center gap-6">
                   <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform shadow-lg group-hover:bg-accent-cyan/10 group-hover:border-accent-cyan/40 transition-colors">
                      {ind.icon}
                   </div>
                   <h2 className="text-4xl font-heading font-bold text-gold-soft tracking-tight uppercase leading-none">{ind.title}</h2>
                </div>
                <div>
                   <span className={`text-[0.7rem] uppercase tracking-[0.2em] font-black ${ind.color} mb-4 block`}>{ind.tag}</span>
                   <p className="text-text-muted text-lg leading-relaxed">
                     {ind.description}
                   </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5 pt-10 border-t border-white/5">
                   {ind.solutions.map((sol) => (
                     <div key={sol} className="flex items-center gap-4 text-text-muted text-sm font-semibold hover:text-white transition-colors">
                        <div className="w-2 h-2 rounded-full bg-brand-gradient group-hover:scale-125 transition-transform"></div>
                        {sol}
                     </div>
                   ))}
                </div>
              </div>

              <div className="lg:w-1/2 relative space-y-6">
                 {/* Decorative background and container with real image instead of mockup */}
                 <div className="p-1 rounded-[40px] bg-brand opacity-80 group-hover:opacity-100 transition-opacity project-card-image shadow-2xl">
                    <div className="aspect-[4/3] rounded-[38px] bg-bg-dark flex items-center justify-center relative overflow-hidden p-0">
                       <img src={ind.image} alt={ind.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                       <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent"></div>
                       <div className="absolute bottom-10 left-10 right-10">
                          <div className="text-white/20 font-heading font-black text-6xl rotate-0 select-none group-hover:text-white/40 transition-colors tracking-tighter uppercase">{ind.title}</div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industry CTA */}
      <section className="py-24 bg-bg-primary">
        <div className="container px-6">
          <div className="p-12 md:p-20 bg-bg-dark border border-white/5 rounded-[40px] text-center overflow-hidden relative group">
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-brand group-hover:h-2 transition-all duration-1000 opacity-60"></div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-full h-[1px] bg-accent-cyan/20 blur-[100px] group-hover:-translate-y-[200px] transition-transform duration-1000"></div>
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
               <span className="text-[0.65rem] font-bold text-accent-cyan tracking-widest uppercase mb-4 block">Industry Partnership</span>
               <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 tracking-tight leading-tight">Let's solve your industry's complex technical challenges</h2>
               <p className="text-xl text-text-muted leading-relaxed mb-12">We align our technical expertise with your specific business goals.</p>
               <Link to="/contact" className="btn btn-primary w-full sm:w-auto px-10 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl shadow-2xl uppercase tracking-widest font-black">
                 Partner With Us
               </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
