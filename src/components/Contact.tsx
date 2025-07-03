
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
    <section id="contact" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-light text-gray-900 mb-2">
            Let's Connect
          </h2>
          <div className="w-12 h-px bg-gray-200 mx-auto mt-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6 animate-fade-in delay-200">
            Ready to collaborate on exciting AI and embedded systems projects? Let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-left">
            <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-light text-gray-900 mb-6 flex items-center space-x-3">
                <MessageCircle className="text-gray-500" size={20} />
                <span>Get in Touch</span>
              </h3>
              <div className="space-y-4">
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
                    className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors duration-300 p-3 rounded-lg hover:bg-gray-50"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                      <Icon size={16} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">{label}</div>
                      <div className="font-medium text-sm">{value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-light text-gray-900 mb-4 flex items-center space-x-3">
                <Clock className="text-gray-500" size={18} />
                <span>Quick Stats</span>
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-gray-50 rounded border border-gray-100">
                  <div className="text-xl font-light text-gray-900">24/7</div>
                  <div className="text-xs text-gray-600">Response Time</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded border border-gray-100">
                  <div className="text-xl font-light text-gray-900">100%</div>
                  <div className="text-xs text-gray-600">Project Success</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm animate-fade-in-right">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1 text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white border border-gray-200 rounded text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 transition-colors duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white border border-gray-200 rounded text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 transition-colors duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-1 text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 transition-colors duration-300"
                  placeholder="Project collaboration"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1 text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 bg-white border border-gray-200 rounded text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project ideas..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-4 rounded transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Send size={16} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-6 border-t border-gray-100">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <CheckCircle className="text-gray-400" size={16} />
            <p className="text-gray-600 text-sm">
              © 2025 Alex Chen. Built with passion for AI and embedded systems.
            </p>
          </div>
          <div className="inline-flex items-center space-x-2 text-xs text-gray-500">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
            <span>Currently available for freelance work</span>
          </div>
        </div>
      </div>
    </section>
  );
};
