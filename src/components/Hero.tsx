
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Simple Profile */}
        <div className="mb-12 animate-fade-in">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 p-0.5 mb-8">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-4xl font-bold text-white">
              AC
            </div>
          </div>
        </div>

        {/* Clean Typography */}
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-light text-white tracking-tight animate-fade-in">
            Alex Chen
          </h1>
          <p className="text-xl text-white/60 font-light animate-fade-in delay-200">
            CSE Student & AI + EC Enthusiast
          </p>
          <p className="text-lg text-white/40 max-w-lg mx-auto leading-relaxed animate-fade-in delay-300">
            Building innovative solutions at the intersection of artificial intelligence and embedded systems.
          </p>
        </div>

        {/* Minimal Social Links */}
        <div className="flex justify-center space-x-8 mt-16 animate-fade-in delay-500">
          <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
            <Github size={24} />
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
            <Linkedin size={24} />
          </a>
          <a href="#contact" className="text-white/60 hover:text-white transition-colors duration-300">
            <Mail size={24} />
          </a>
        </div>

        {/* Simple Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in delay-700">
          <ArrowDown className="text-white/40" size={24} />
        </div>
      </div>
    </section>
  );
};
