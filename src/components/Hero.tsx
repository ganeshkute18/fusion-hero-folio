
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Compact Profile */}
        <div className="mb-8 animate-fade-in">
          <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 border border-gray-200 p-0.5 mb-6">
            <div className="w-full h-full rounded-full bg-gray-50 flex items-center justify-center text-lg font-medium text-gray-700">
              AC
            </div>
          </div>
        </div>

        {/* Clean Typography */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-light text-gray-900 tracking-tight animate-fade-in">
            Alex Chen
          </h1>
          <p className="text-lg text-gray-600 font-light animate-fade-in delay-200">
            CSE Student & AI + EC Enthusiast
          </p>
          <p className="text-base text-gray-500 max-w-lg mx-auto leading-relaxed animate-fade-in delay-300">
            Building innovative solutions at the intersection of artificial intelligence and embedded systems.
          </p>
        </div>

        {/* Compact Social Links */}
        <div className="flex justify-center space-x-6 mt-12 animate-fade-in delay-500">
          <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors duration-300">
            <Github size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors duration-300">
            <Linkedin size={20} />
          </a>
          <a href="#contact" className="text-gray-400 hover:text-gray-600 transition-colors duration-300">
            <Mail size={20} />
          </a>
        </div>

        {/* Minimal Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in delay-700">
          <ArrowDown className="text-gray-300" size={20} />
        </div>
      </div>
    </section>
  );
};
