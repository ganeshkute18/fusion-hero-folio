
import { Mail, MapPin, Phone, Send, MessageCircle, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Simple Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6">
            <h2 className="text-4xl md:text-5xl font-light text-white">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-white/20 mx-auto mt-4 rounded-full animate-fade-in delay-300"></div>
          </div>
          <p className="text-xl text-white/70 max-w-2xl mx-auto animate-fade-in delay-200">
            Ready to collaborate on exciting AI and embedded systems projects? Let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500">
              <h3 className="text-2xl font-light text-white mb-6 flex items-center space-x-3">
                <MessageCircle className="text-white/80" size={24} />
                <span>Get in Touch</span>
              </h3>
              <div className="space-y-6">
                {[
                  { 
                    icon: Mail, 
                    label: "Email", 
                    value: "alex.chen@email.com", 
                    href: "mailto:alex.chen@email.com"
                  },
                  { 
                    icon: Phone, 
                    label: "Phone", 
                    value: "+1 (555) 123-4567", 
                    href: "tel:+15551234567"
                  },
                  { 
                    icon: MapPin, 
                    label: "Location", 
                    value: "San Francisco, CA", 
                    href: "#"
                  }
                ].map(({ icon: Icon, label, value, href }, index) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center space-x-4 text-white/80 hover:text-white transition-all duration-300 p-4 rounded-xl hover:bg-white/5 animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-white/20">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-white/60">{label}</div>
                      <div className="font-medium hover:text-white transition-colors">{value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 animate-scale-in delay-200">
              <h3 className="text-xl font-light text-white mb-6 flex items-center space-x-3">
                <Clock className="text-white/80" size={20} />
                <span>Quick Stats</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="text-2xl font-light text-white">24/7</div>
                  <div className="text-sm text-white/70">Response Time</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="text-2xl font-light text-white">100%</div>
                  <div className="text-sm text-white/70">Project Success</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 animate-fade-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="animate-fade-in delay-100">
                  <label htmlFor="name" className="block text-white/80 mb-2 font-light">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-300 hover:border-white/30 backdrop-blur-sm"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="animate-fade-in delay-200">
                  <label htmlFor="email" className="block text-white/80 mb-2 font-light">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-300 hover:border-white/30 backdrop-blur-sm"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="animate-fade-in delay-300">
                <label htmlFor="subject" className="block text-white/80 mb-2 font-light">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-300 hover:border-white/30 backdrop-blur-sm"
                  placeholder="Project collaboration"
                  required
                />
              </div>

              <div className="animate-fade-in delay-400">
                <label htmlFor="message" className="block text-white/80 mb-2 font-light">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-300 resize-none hover:border-white/30 backdrop-blur-sm"
                  placeholder="Tell me about your project ideas..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white/20 hover:bg-white/30 text-white font-light py-4 px-6 rounded-lg transition-all duration-500 transform hover:scale-[1.02] flex items-center justify-center space-x-3 animate-slide-up delay-500 border border-white/20 hover:border-white/30"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-white/10 animate-fade-in delay-600">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <CheckCircle className="text-white/60" size={20} />
            <p className="text-white/60">
              © 2025 Alex Chen. Built with passion for AI and embedded systems.
            </p>
          </div>
          <div className="inline-flex items-center space-x-2 text-sm text-white/40">
            <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
            <span>Currently available for freelance work</span>
          </div>
        </div>
      </div>
    </section>
  );
};
