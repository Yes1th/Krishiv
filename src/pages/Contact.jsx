import { useState } from 'react';

const faqs = [
  {
    q: 'What services do you provide?',
    a: 'We specialize in Guidewire implementation, Snowflake data warehousing, AWS cloud engineering, and Generative AI solutions. We also handle legacy modernization and business process automation.'
  },
  {
    q: 'Do you support startups?',
    a: 'Yes, we partner with organizations of all sizes, from innovative startups to large enterprises, tailoring our solutions to their specific growth stage and technical needs.'
  },
  {
    q: 'What industries do you specialize in?',
    a: 'We have deep domain expertise in Insurance (specifically Guidewire ecosystems) and Finance, but we also serve a wide range of enterprise businesses looking for digital transformation.'
  },
  {
    q: 'How do we get started?',
    a: 'Simply fill out the contact form or call us. We normally start with a technical discovery call to understand your business goals and current infrastructure.'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-32 md:pt-40 bg-bg-primary min-h-screen">
      {/* Contact Hero */}
      <section className="relative py-24 bg-bg-dark overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-cyan/5 blur-[120px] rounded-full"></div>
        <div className="container px-6 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="section-tag border-accent-cyan/40 bg-accent-cyan/5 text-accent-cyan uppercase mb-6">Get In Touch</span>
                <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-white mb-8 tracking-tighter leading-tight">
                  Let's Build the <span className="gradient-text uppercase">Future</span>
                </h1>
                <p className="text-xl text-text-muted leading-relaxed max-w-2xl">
                  Our experts are ready to help you navigate your digital transformation journey. Reach out to discuss your project.
                </p>
              </div>
              <div className="relative hidden lg:block">
                 <div className="p-1 rounded-[32px] bg-brand shadow-2xl">
                    <div className="rounded-[30px] overflow-hidden aspect-video">
                       <img src="/images/hero_contact.png" alt="Communication Hub" className="w-full h-full object-cover" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand opacity-30"></div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-bg-primary">
        <div className="container px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Info Side */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div>
              <h2 className="text-3xl font-heading font-bold text-gold-soft mb-8 uppercase tracking-widest">Contact Information</h2>
              <div className="space-y-8">
                {[
                  { label: 'Phone', value: '+1 657-772-6864', icon: '📞', color: 'text-accent-cyan', href: 'tel:+16577726864' },
                  { label: 'Email', value: 'info@krishivtech.com', icon: '✉️', color: 'text-accent-amber', href: 'mailto:info@krishivtech.com' },
                  { label: 'Address', value: '11415 8th PL W, UNIT A, Everett, WA 98204', icon: '📍', color: 'text-accent-pink' },
                  { label: 'Hours', value: 'Mon – Fri: 9:00 AM – 6:00 PM (CST)', icon: '🕰️', color: 'text-accent-purple' }
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-6 group hover:-translate-y-1 transition-transform">
                     <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl group-hover:bg-white/10 group-hover:border-accent-cyan/20 transition-all shadow-xl">
                        {item.icon}
                     </div>
                     <div className="space-y-1">
                        <p className={`text-[0.65rem] font-bold ${item.color} uppercase tracking-widest leading-none mb-1`}>{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-xl text-text-muted hover:text-white transition-colors font-medium">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-xl text-text-muted font-medium leading-tight">{item.value}</p>
                        )}
                     </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Box */}
            <div className="p-10 glass-card bg-bg-secondary/40 border-accent-cyan/10 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-12 bg-accent-cyan/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <h3 className="text-2xl font-heading font-bold text-white mb-6 tracking-tight">Dedicated Support</h3>
               <p className="text-text-muted text-base leading-relaxed mb-8">
                 We provide prioritized support for all our ongoing transformation projects. Our regional team is available across US time zones.
               </p>
               <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-bg-dark bg-bg-primary overflow-hidden relative shadow-lg">
                       <div className="absolute inset-0 bg-brand opacity-20"></div>
                       <div className="absolute inset-0 flex items-center justify-center font-heading font-black text-white/10 text-xl select-none">K</div>
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-bg-dark bg-bg-primary flex items-center justify-center text-[0.65rem] font-bold text-accent-cyan tracking-tighter shadow-lg">
                    +5 EXPERTS
                  </div>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="glass-card p-10 md:p-14 relative overflow-hidden bg-bg-secondary/30 ring-1 ring-white/5">
               {submitted ? (
                 <div className="text-center py-20 flex flex-col items-center gap-8 animate-fade">
                    <div className="w-24 h-24 rounded-full bg-brand-gradient flex items-center justify-center text-5xl shadow-glow-brand text-white">✓</div>
                    <h2 className="text-4xl font-heading font-bold text-white tracking-widest uppercase">Message Sent</h2>
                    <p className="text-xl text-text-muted leading-relaxed">Thank you for reaching out. Our experts will get back to you shortly.</p>
                    <button onClick={() => setSubmitted(false)} className="btn btn-outline px-10">Send Another Message</button>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-3">
                          <label className="text-[0.65rem] font-bold text-text-muted uppercase tracking-widest pl-1">Full Name</label>
                          <input 
                            name="name" required placeholder="John Doe" value={formData.name} onChange={handleChange}
                            className="w-full bg-bg-dark/60 border border-white/10 rounded-2xl px-5 py-5 text-white placeholder:text-white/10 focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-all shadow-inner" 
                          />
                       </div>
                       <div className="space-y-3">
                          <label className="text-[0.65rem] font-bold text-text-muted uppercase tracking-widest pl-1">Email Address</label>
                          <input 
                            name="email" type="email" required placeholder="john@example.com" value={formData.email} onChange={handleChange}
                            className="w-full bg-bg-dark/60 border border-white/10 rounded-2xl px-5 py-5 text-white placeholder:text-white/10 focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-all shadow-inner" 
                          />
                       </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-3">
                          <label className="text-[0.65rem] font-bold text-text-muted uppercase tracking-widest pl-1">Phone Number</label>
                          <input 
                            name="phone" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={handleChange}
                            className="w-full bg-bg-dark/60 border border-white/10 rounded-2xl px-5 py-5 text-white placeholder:text-white/10 focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-all shadow-inner" 
                          />
                       </div>
                       <div className="space-y-3">
                          <label className="text-[0.65rem] font-bold text-text-muted uppercase tracking-widest pl-1">Service Required</label>
                          <div className="relative">
                            <select 
                                name="service" value={formData.service} onChange={handleChange}
                                className="w-full bg-bg-dark/60 border border-white/10 rounded-2xl px-5 py-5 text-white placeholder:text-white/10 focus:border-accent-cyan/50 appearance-none cursor-pointer shadow-inner"
                            >
                                <option value="" className="bg-bg-dark">Select Service</option>
                                <option value="Guidewire" className="bg-bg-dark">Guidewire Implementation</option>
                                <option value="Cloud" className="bg-bg-dark">Cloud Engineering</option>
                                <option value="Data" className="bg-bg-dark">Data Warehousing</option>
                                <option value="AI" className="bg-bg-dark">Generative AI</option>
                                <option value="Modernization" className="bg-bg-dark">Legacy Modernization</option>
                            </select>
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"></path></svg>
                            </div>
                          </div>
                       </div>
                    </div>
                    <div className="space-y-3">
                       <label className="text-[0.65rem] font-bold text-text-muted uppercase tracking-widest pl-1">Your Message</label>
                       <textarea 
                         name="message" required rows="5" placeholder="Tell us about your project..." value={formData.message} onChange={handleChange}
                         className="w-full bg-bg-dark/60 border border-white/10 rounded-2xl px-5 py-5 text-white placeholder:text-white/10 focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 transition-all resize-none shadow-inner"
                       ></textarea>
                    </div>
                    <button type="submit" className="w-full btn btn-primary py-4 sm:py-6 text-lg sm:text-xl font-black uppercase tracking-[0.2em] shadow-glow-brand transition-all hover:translate-y-[-2px] hover:shadow-2xl">
                       Send Message 🚀
                    </button>
                 </form>
               )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-bg-dark border-y border-white/5 relative">
        <div className="container px-6">
          <div className="text-center mb-20">
             <span className="section-tag border-accent-purple/40 bg-accent-purple/5 text-accent-purple">Knowledge Base</span>
             <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 uppercase tracking-tight">FAQ Section</h2>
             <p className="text-text-muted text-lg font-medium italic">Everything you need to know about our services.</p>
          </div>
          
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
             {faqs.map((faq, i) => (
                <div key={i} className="p-10 glass-card border-white/5 group hover:border-accent-cyan/40 transition-all bg-bg-secondary/20">
                   <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan font-bold text-xl mb-6 group-hover:scale-110 group-hover:bg-accent-cyan/20 transition-all">?</div>
                   <h3 className="text-2xl font-heading font-bold text-white mb-6 pr-10 leading-tight">{faq.q}</h3>
                   <p className="text-text-muted text-base leading-relaxed">{faq.a}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Abstract Map Area */}
      <section className="py-24 bg-bg-primary">
        <div className="container px-6">
           <div className="h-[500px] w-full rounded-[40px] bg-bg-dark border border-white/5 p-4 relative overflow-hidden flex items-center justify-center shadow-2xl group">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-brand opacity-40 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-bg-secondary/40 via-transparent to-bg-secondary/40"></div>
              
              <div className="relative text-center z-10 space-y-6">
                 <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-5xl mx-auto shadow-2xl group-hover:scale-110 group-hover:bg-accent-cyan/10 transition-all">📍</div>
                 <h3 className="text-3xl font-heading font-bold text-white tracking-widest uppercase">Everett, WA 98204</h3>
                 <p className="text-xl text-text-muted max-w-sm mx-auto leading-relaxed">Serving global businesses from our technical hub in Washington, United States.</p>
              </div>

              {/* Decorative Tech Overlay */}
              <div className="absolute inset-0 opacity-5 pointer-events-none group-hover:scale-105 transition-transform duration-1000">
                 <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                       <pattern id="gridLarge" width="80" height="80" patternUnits="userSpaceOnUse">
                          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="2" />
                       </pattern>
                       <pattern id="gridSmall" width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                       </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#gridLarge)" />
                    <rect width="100%" height="100%" fill="url(#gridSmall)" />
                 </svg>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
