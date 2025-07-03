
import { ArrowDown, Github, Linkedin, Mail, Code2, Cpu, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Matrix-style Background Elements */}
      <div className="absolute inset-0">
        {/* Animated background orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-500/5 rounded-full blur-2xl animate-pulse-slow delay-500"></div>
        
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div 
                key={i} 
                className="border border-cyan-500/20 animate-fade-in" 
                style={{ animationDelay: `${i * 50}ms` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Code2 className="text-cyan-400/30" size={24} />
        </div>
        <div className="absolute top-3/4 right-1/4 animate-float delay-1000">
          <Cpu className="text-purple-400/30" size={28} />
        </div>
        <div className="absolute top-1/2 left-3/4 animate-float delay-500">
          <Zap className="text-teal-400/30" size={20} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Enhanced Profile Image */}
        <div className="mb-8 relative animate-scale-in">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-teal-400 p-1 animate-glow">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-6xl font-bold text-white relative overflow-hidden">
              {/* Animated background pattern inside avatar */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 animate-rotate-slow"></div>
              <span className="relative z-10">AC</span>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-500 rounded-full animate-pulse"></div>
        </div>

        {/* Enhanced Hero Text with Staggered Animations */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent leading-tight animate-fade-in">
            I'm Alex Chen
          </h1>
          <h2 className="text-2xl md:text-3xl text-cyan-300 font-medium animate-fade-in-left delay-300">
            CSE Student & AI + EC Enthusiast
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed animate-fade-in-right delay-500">
            Passionate about artificial intelligence, embedded systems, and creating innovative solutions 
            that bridge the gap between software and hardware.
          </p>
        </div>

        {/* Enhanced Social Links */}
        <div className="flex justify-center space-x-6 mt-12 animate-slide-up delay-700">
          {[
            { icon: Github, href: "#", label: "GitHub", color: "hover:bg-slate-500/20 hover:border-slate-400/40" },
            { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-500/20 hover:border-blue-400/40" },
            { icon: Mail, href: "#contact", label: "Contact", color: "hover:bg-green-500/20 hover:border-green-400/40" }
          ].map(({ icon: Icon, href, label, color }, index) => (
            <a
              key={label}
              href={href}
              className={`w-14 h-14 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white ${color} hover:scale-125 transition-all duration-500 group animate-scale-in`}
              style={{ animationDelay: `${700 + index * 100}ms` }}
            >
              <Icon size={24} className="group-hover:text-white transition-colors duration-300" />
            </a>
          ))}
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce delay-1000">
          <div className="flex flex-col items-center space-y-2">
            <ArrowDown className="text-white/60" size={32} />
            <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Scan Line Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-matrix"></div>
      </div>
    </section>
  );
};
