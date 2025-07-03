
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
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, cyan 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-teal-300 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4 rounded-full animate-fade-in delay-300"></div>
          </div>
          <p className="text-xl text-white/70 max-w-2xl mx-auto animate-fade-in delay-200">
            Ready to collaborate on exciting AI and embedded systems projects? Let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Info */}
          <div className="space-y-8 animate-fade-in-left">
            <div className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-700 hover:shadow-xl hover:shadow-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <MessageCircle className="text-cyan-400" size={24} />
                <span>Get in Touch</span>
              </h3>
              <div className="space-y-6">
                {[
                  { 
                    icon: Mail, 
                    label: "Email", 
                    value: "alex.chen@email.com", 
                    href: "mailto:alex.chen@email.com",
                    color: "from-red-500/20 to-pink-500/20 group-hover:from-red-500/30 group-hover:to-pink-500/30"
                  },
                  { 
                    icon: Phone, 
                    label: "Phone", 
                    value: "+1 (555) 123-4567", 
                    href: "tel:+15551234567",
                    color: "from-green-500/20 to-emerald-500/20 group-hover:from-green-500/30 group-hover:to-emerald-500/30"
                  },
                  { 
                    icon: MapPin, 
                    label: "Location", 
                    value: "San Francisco, CA", 
                    href: "#",
                    color: "from-blue-500/20 to-indigo-500/20 group-hover:from-blue-500/30 group-hover:to-indigo-500/30"
                  }
                ].map(({ icon: Icon, label, value, href, color }, index) => (
                  <a
                    key={label}
                    href={href}
                    className="group/item flex items-center space-x-4 text-white/80 hover:text-white transition-all duration-300 p-4 rounded-xl hover:bg-white/5 animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${color} flex items-center justify-center transition-all duration-300 border border-white/10 group-hover/item:border-cyan-400/30`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-white/60">{label}</div>
                      <div className="font-medium group-hover/item:text-cyan-300 transition-colors">{value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Enhanced Quick Stats */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-500 animate-scale-in delay-200">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-3">
                <Clock className="text-purple-400" size={20} />
                <span>Quick Stats</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-lg border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className="text-2xl font-bold text-cyan-300 group-hover:text-cyan-200">24/7</div>
                  <div className="text-sm text-white/70">Response Time</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group">
                  <div className="text-2xl font-bold text-purple-300 group-hover:text-purple-200">100%</div>
                  <div className="text-sm text-white/70">Project Success</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-700 hover:shadow-xl hover:shadow-purple-500/20 animate-fade-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="animate-fade-in delay-100">
                  <label htmlFor="name" className="block text-white/80 mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 hover:border-white/30 backdrop-blur-sm"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="animate-fade-in delay-200">
                  <label htmlFor="email" className="block text-white/80 mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 hover:border-white/30 backdrop-blur-sm"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="animate-fade-in delay-300">
                <label htmlFor="subject" className="block text-white/80 mb-2 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 hover:border-white/30 backdrop-blur-sm"
                  placeholder="Project collaboration"
                  required
                />
              </div>

              <div className="animate-fade-in delay-400">
                <label htmlFor="message" className="block text-white/80 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 resize-none hover:border-white/30 backdrop-blur-sm"
                  placeholder="Tell me about your project ideas..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/30 flex items-center justify-center space-x-3 animate-slide-up delay-500 relative overflow-hidden"
              >
                {/* Button Background Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                
                <Send size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                <span>Send Message</span>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 group-hover:animate-[slide-right_1s_ease-out] transition-opacity duration-300"></div>
              </button>
            </form>
          </div>
        </div>

        {/* Enhanced Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gradient-to-r from-transparent via-white/20 to-transparent animate-fade-in delay-600">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <CheckCircle className="text-green-400" size={20} />
            <p className="text-white/60">
              © 2025 Alex Chen. Built with passion for AI and embedded systems.
            </p>
          </div>
          <div className="inline-flex items-center space-x-2 text-sm text-white/40">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Currently available for freelance work</span>
          </div>
        </div>
      </div>
    </section>
  );
};
