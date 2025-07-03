
import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-black/30 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3 group animate-fade-in">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <Code2 className="text-white" size={20} />
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
              Portfolio
            </div>
          </div>
          
          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex space-x-1 bg-white/5 backdrop-blur-sm rounded-full p-2 border border-white/10 animate-fade-in delay-200">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-6 py-2 text-white/80 hover:text-white transition-all duration-300 rounded-full hover:bg-white/10 group animate-scale-in"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Active Indicator */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-4 transition-all duration-300 rounded-full"></div>
              </a>
            ))}
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative">
              {isMobileMenuOpen ? (
                <X size={20} className="transform rotate-90 group-hover:rotate-180 transition-transform duration-300" />
              ) : (
                <Menu size={20} className="group-hover:scale-110 transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/30 backdrop-blur-xl rounded-2xl mb-4 p-6 border border-white/10 shadow-xl animate-scale-in">
            <div className="space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex items-center space-x-3 text-white/80 hover:text-white py-3 px-4 rounded-xl hover:bg-white/10 transition-all duration-300 animate-fade-in-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
            
            {/* Mobile Menu Decoration */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></div>
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-400"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
