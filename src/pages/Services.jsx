import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Guidewire Ecosystem Services',
    icon: '🏢',
    image: '/images/service_guidewire.png',
    features: [
      'End-to-End Guidewire Implementation',
      'PolicyCenter Configuration & Integration',
      'System Optimization & Performance Tuning',
      'Version Upgrades & Migration'
    ],
    bg: 'bg-primary/10',
    colorScale: 'text-primary'
  },
  {
    id: 2,
    title: 'Data Operations & Cloud Engineering',
    icon: '☁️',
    image: '/images/service_cloud.png',
    features: [
      'Snowflake Data Warehouse Implementation',
      'AWS Cloud Architecture Design',
      'Data Pipeline Development (Python & SQL)',
      'ETL Automation'
    ],
    bg: 'bg-accent-cyan/10',
    colorScale: 'text-accent-cyan'
  },
  {
    id: 3,
    title: 'Advanced Technology Solutions',
    icon: '🤖',
    image: '/images/service_ai.png',
    features: [
      'Generative AI Integration (Databricks)',
      'Business Process Automation',
      'Legacy System Modernization',
      'Cloud-Native Transformation'
    ],
    bg: 'bg-accent-purple/10',
    colorScale: 'text-accent-purple'
  }
];

export default function Services() {
  return (
    <div className="pt-32 md:pt-40 bg-bg-primary">
      {/* Services Hero */}
      <section className="py-24 relative overflow-hidden bg-bg-dark border-b border-white/5 min-h-[50vh] flex items-center">
        <div className="absolute top-1/2 left-0 w-1/4 h-full bg-primary/10 blur-[150px] rounded-full rotate-45 opacity-50"></div>
        <div className="container px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <span className="section-tag mb-4 border-accent-cyan/40 bg-accent-cyan/5 text-accent-cyan">Our Expertise</span>
              <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-white mb-6 tracking-tight">
                Comprehensive <span className="gradient-text">Technical Consulting</span>
              </h1>
              <p className="text-xl text-text-muted max-w-xl mb-10 leading-relaxed">
                Delivering high-impact digital solutions through expert engineering and data-driven strategy.
              </p>
            </div>
            <div className="relative hidden lg:block">
              <div className="p-1 rounded-[32px] bg-brand shadow-2xl">
                 <div className="rounded-[30px] overflow-hidden aspect-video">
                    <img src="/images/hero_services.png" alt="Engineering Excellence" className="w-full h-full object-cover" />
                 </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand opacity-30"></div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 bg-bg-primary">
        <div className="container px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.id} className="glass-card flex flex-col group relative border-white/5 shadow-2xl hover:border-accent-cyan/40 transition-all duration-300 overflow-hidden">
                {/* Card Image Header */}
                <div className="h-48 w-full overflow-hidden relative">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent opacity-60"></div>
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center text-2xl border border-white/10 backdrop-blur-md`}>
                    {s.icon}
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-grow">
                  <div className="absolute top-48 right-0 p-8 text-6xl opacity-10 font-black tracking-tighter group-hover:scale-110 transition-transform text-white/20">0{s.id}</div>
                  <h2 className="text-2xl font-heading font-bold text-gold-soft mb-8 pr-12 leading-tight">{s.title}</h2>
                <ul className="space-y-5 mb-12 flex-grow">
                  {s.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-4 text-text-muted text-sm font-semibold border-b border-white/5 pb-3 last:border-0 hover:text-white transition-colors">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`${s.colorScale} mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform`}><polyline points="20 6 9 17 4 12"></polyline></svg>
                      {f}
                    </li>
                   ))}
                  </ul>
                  <div className="pt-8 border-t border-white/10">
                     <Link to="/contact" className="btn btn-outline w-full py-4 uppercase font-bold tracking-widest text-xs">
                       Inquire About Service
                     </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insight Section */}
      <section className="py-24 bg-bg-dark border-y border-white/5 relative">
        <div className="container px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <span className="text-[0.7rem] uppercase tracking-[0.2em] font-black text-accent-pink mb-4 inline-block">Transformation Insight</span>
                 <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 tracking-tight">Legacy Modernization <span className="text-gold-soft uppercase">without Risk</span></h2>
                 <p className="text-text-muted text-lg leading-relaxed mb-10">
                    We specialize in helping insurance and financial organizations move beyond their monolithic legacy systems. Our proven approach ensures zero downtime and provides a scalable, future-ready architecture.
                 </p>
                 <div className="grid grid-cols-2 gap-10 mb-12">
                   <div className="p-6 glass-card border-accent-cyan/10 bg-accent-cyan/5">
                      <div className="text-4xl font-heading font-bold text-white mb-2">85%</div>
                      <p className="text-[0.65rem] text-text-muted font-bold tracking-[0.15em] uppercase leading-none">Cost Optimization</p>
                   </div>
                   <div className="p-6 glass-card border-accent-purple/10 bg-accent-purple/5">
                      <div className="text-4xl font-heading font-bold text-white mb-2">4x</div>
                      <p className="text-[0.65rem] text-text-muted font-bold tracking-[0.15em] uppercase leading-none">Deployment Speed</p>
                   </div>
                 </div>
                 <Link to="/contact" className="btn btn-primary w-full sm:w-auto px-10 py-4 sm:py-5 text-base uppercase font-bold tracking-widest shadow-2xl">
                    Partner with our experts
                 </Link>
              </div>
              <div className="relative group">
                 <div className="p-1 rounded-[32px] bg-brand shadow-2xl">
                    <div className="aspect-video bg-bg-dark rounded-[30px] relative overflow-hidden group">
                       <img src="/images/success_modernization.png" alt="Legacy Modernization Transformation" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110" />
                       <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-80"></div>
                       <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center text-white/20 select-none">
                          <span className="font-heading font-black text-6xl tracking-tighter group-hover:text-accent-cyan/40 transition-colors">LEGACY</span>
                          <span className="font-heading font-black text-6xl tracking-tighter group-hover:text-accent-purple/40 transition-colors delay-100 uppercase">Modern</span>
                       </div>
                    </div>
                 </div>
                 <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-gradient opacity-10 blur-3xl rounded-full"></div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-bg-primary">
         <div className="container px-6">
            <div className="p-12 md:p-20 bg-gradient-to-br from-bg-dark via-bg-primary to-bg-dark rounded-[40px] border border-white/10 text-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-brand opacity-5"></div>
               <div className="relative z-10 max-w-4xl mx-auto">
                  <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 tracking-tight">Need a <span className="text-gold-soft uppercase">Custom Solution</span>?</h2>
                  <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
                    👉 From business process automation to complex system integrations, our experts are happy to discuss your specific technical challenges.
                  </p>
                  <Link to="/contact" className="btn btn-primary w-full sm:w-auto px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold tracking-widest uppercase">
                     Contact Our Experts
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
