import { Link } from 'react-router-dom';

const differentiators = [
  {
    title: 'Deep Domain Expertise',
    desc: 'Specialized in insurance ecosystems (Guidewire) and complex data platforms (Snowflake). We don\'t just know tech; we know your business.',
    icon: '🏢',
    tag: 'Knowledge',
    color: 'text-accent-cyan'
  },
  {
    title: 'Certified Excellence',
    desc: 'Our team holds multiple certifications in Snowflake, AWS, and modern AI technologies (Databricks). We follow industry best practices.',
    icon: '🏆',
    tag: 'Quality',
    color: 'text-accent-amber'
  },
  {
    title: 'Strategic Partnership',
    desc: 'We align technology strategy directly with your long-term business goals, ensuring every implementation drives measurable value.',
    icon: '🤝',
    tag: 'Alignment',
    color: 'text-accent-purple'
  },
  {
    title: 'Agile Delivery',
    desc: 'Fast, efficient, and cost-effective execution. Our agile methodology ensures transparent communication and iterative progress.',
    icon: '⚡',
    tag: 'Speed',
    color: 'text-accent-pink'
  }
];

export default function Differentiators() {
  return (
    <div className="pt-32 md:pt-40 bg-bg-primary">
      {/* Differentiators Hero */}
      <section className="relative py-24 bg-bg-dark overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-purple/5 blur-[120px] rounded-full"></div>
        <div className="container px-6 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="section-tag border-accent-purple/40 bg-accent-purple/5 text-accent-purple uppercase mb-6">Why Us</span>
                <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-8 tracking-tighter">
                  The KriShiv <span className="gradient-text uppercase">Advantage</span>
                </h1>
                <p className="text-xl text-text-muted max-w-2xl leading-relaxed">
                  We bridge the gap between legacy and modern through strategic engineering and industry-specific expertise.
                </p>
              </div>
              <div className="relative hidden lg:block">
                 <div className="p-1 rounded-[32px] bg-brand shadow-2xl">
                    <div className="rounded-[30px] overflow-hidden aspect-square max-w-[400px] mx-auto">
                       <img src="/images/hero_differentiators.png" alt="Strategic Advantage" className="w-full h-full object-cover" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand opacity-30"></div>
      </section>

      {/* Main Grid */}
      <section className="py-24 bg-bg-primary">
        <div className="container px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {differentiators.map((diff, i) => (
            <div key={diff.title} className="p-10 glass-card flex flex-col items-start gap-8 group border-white/5 hover:border-accent-cyan/40 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-4xl group-hover:scale-110 group-hover:bg-white/10 transition-transform">
                 {diff.icon}
              </div>
              <div className="space-y-4">
                 <span className={`text-[0.7rem] uppercase tracking-[0.2em] font-black ${diff.color} mb-2 block`}>{diff.tag}</span>
                 <h2 className="text-3xl font-heading font-bold text-gold-soft mb-4 pr-10 leading-tight">{diff.title}</h2>
                 <p className="text-text-muted text-lg leading-relaxed">
                   {diff.desc}
                 </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section (Simplified) */}
      <section className="py-24 bg-bg-dark border-y border-white/5 relative">
        <div className="container px-6">
          <div className="max-w-5xl mx-auto glass-card p-12 md:p-16 border-white/5 bg-bg-secondary/40 rounded-[40px] shadow-2xl overflow-hidden relative group">
             {/* Glow */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/5 blur-[100px] rounded-full opacity-50"></div>
             
             <div className="text-center mb-20 relative z-10">
                <h2 className="text-4xl font-heading font-bold text-white mb-6 tracking-tight leading-tight">The KriShiv <span className="gradient-text uppercase">Advantage</span></h2>
                <p className="text-text-muted max-w-xl mx-auto italic">How we differ from traditional technical consultancies.</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 relative z-10">
                <div className="p-10 glass-card bg-bg-dark border-accent-cyan/20 space-y-8 group/side">
                   <h3 className="text-2xl font-heading font-bold text-white flex items-center gap-4">
                      <span className="w-3 h-10 bg-brand opacity-60 rounded-full"></span>
                      Our Approach
                   </h3>
                   <ul className="space-y-6">
                      {[
                        'Direct access to senior certified experts',
                        'Strategic alignment with business outcomes',
                        'Zero-downtime legacy migrations',
                        'Fixed-fee or agile flexible models'
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-4 text-white font-medium group/item transition-colors">
                           <div className="w-2 h-2 rounded-full bg-accent-cyan mt-2 shadow-glow-cyan"></div>
                           {item}
                        </li>
                      ))}
                   </ul>
                </div>

                <div className="p-10 glass-card bg-bg-dark opacity-40 border-white/5 space-y-8 grayscale">
                   <h3 className="text-2xl font-heading font-bold text-text-muted flex items-center gap-4">
                      <span className="w-3 h-10 bg-white/10 rounded-full"></span>
                      Traditional Approach
                   </h3>
                   <ul className="space-y-6">
                      {[
                        'Junior-heavy delivery teams',
                        'Purely technical implementation focus',
                        'High risk during legacy transition',
                        'Complex, opaque billing structures'
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-4 text-text-muted text-medium line-through">
                           <div className="w-2 h-2 rounded-full bg-text-muted mt-2"></div>
                           {item}
                        </li>
                      ))}
                   </ul>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-bg-primary">
        <div className="container px-6">
          <div className="relative p-12 md:p-24 rounded-[40px] bg-bg-dark border border-white/10 overflow-hidden text-center group">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-brand opacity-60"></div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 tracking-tight">Choose <span className="text-gold-soft uppercase">Strategic Success</span></h2>
            <p className="text-xl text-text-muted mb-12 max-w-3xl mx-auto leading-relaxed">
               👇 Partner with technical consultants who prioritize your business growth over technical complexity. Let's start your transformation.
            </p>
            <Link to="/contact" className="btn btn-primary w-full sm:w-auto px-10 sm:px-14 py-4 sm:py-6 text-lg sm:text-xl uppercase font-black tracking-widest shadow-2xl transition-transform">
              Transform Your Business Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
