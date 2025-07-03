
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-8 relative">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 p-1 animate-fade-in">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-6xl font-bold text-white">
              CS
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-ping"></div>
        </div>

        {/* Hero Text */}
        <div className="space-y-6 animate-fade-in delay-300">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent leading-tight">
            I'm Alex Chen
          </h1>
          <h2 className="text-2xl md:text-3xl text-cyan-300 font-medium">
            CSE Student & AI + EC Enthusiast
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Passionate about artificial intelligence, embedded systems, and creating innovative solutions 
            that bridge the gap between software and hardware.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-12 animate-fade-in delay-500">
          {[
            { icon: Github, href: "#", label: "GitHub" },
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Mail, href: "#contact", label: "Contact" }
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-cyan-400/20 hover:border-cyan-400/40 hover:scale-110 transition-all duration-300 group"
            >
              <Icon size={24} className="group-hover:text-cyan-300" />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white/60" size={32} />
        </div>
      </div>
    </section>
  );
};
