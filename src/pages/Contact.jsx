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
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-32 md:pt-40 bg-bg-primary min-h-screen">

      {/* Main Contact Section */}
      <section className="py-24 bg-bg-primary">
        <div className="container px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Info Side */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div>
              <h2 className="text-3xl font-heading font-bold text-gold-soft mb-8 uppercase tracking-widest">
                Contact Information
              </h2>

              <div className="space-y-8">
                {[
                  {
                    label: 'Phone',
                    value: '+1 657-772-6864',
                    icon: '📞',
                    color: 'text-accent-cyan',
                    href: 'tel:+16577726864'
                  },
                  {
                    label: 'General Inquiry',
                    value: 'info@krishivtechconsultants.com',
                    icon: '✉️',
                    color: 'text-accent-amber',
                    href: 'mailto:info@krishivtechconsultants.com'
                  },
                  {
                    label: 'Business Contact',
                    value: 'hr@krishivtechconsultants.com',
                    icon: '✉️',
                    color: 'text-accent-amber',
                    href: 'mailto:hr@krishivtechconsultants.com'
                  },
                  {
                    label: 'Address',
                    value: '11400 airport road, suite 200, Everett, WA 98204',
                    icon: '📍',
                    color: 'text-accent-pink'
                  },
                  {
                    label: 'Hours',
                    value: 'Mon – Fri: 9:00 AM – 6:00 PM (CST)',
                    icon: '🕰️',
                    color: 'text-accent-purple'
                  }
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl">
                      {item.icon}
                    </div>
                    <div>
                      <p className={`text-[0.65rem] font-bold ${item.color} uppercase`}>
                        {item.label}
                      </p>
                      {item.href ? (
                        <a href={item.href} className="text-xl text-text-muted hover:text-white">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-xl text-text-muted">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="glass-card p-10">

              {submitted ? (
                <div className="text-center py-20">
                  <h2 className="text-3xl text-white">Message Sent ✅</h2>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  <input
                    name="name"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 rounded bg-bg-dark text-white"
                  />

                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 rounded bg-bg-dark text-white"
                  />

                  <input
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-4 rounded bg-bg-dark text-white"
                  />

                  <textarea
                    name="message"
                    placeholder="Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 rounded bg-bg-dark text-white"
                  />

                  <button className="btn btn-primary w-full">
                    Send Message
                  </button>

                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
