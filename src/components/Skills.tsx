
export const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Python", level: 95, icon: "🐍" },
        { name: "TensorFlow", level: 90, icon: "🧠" },
        { name: "PyTorch", level: 85, icon: "🔥" },
        { name: "OpenCV", level: 88, icon: "👁️" },
        { name: "scikit-learn", level: 92, icon: "📊" }
      ]
    },
    {
      title: "Embedded Systems",
      skills: [
        { name: "C/C++", level: 93, icon: "⚡" },
        { name: "Arduino", level: 88, icon: "🔧" },
        { name: "Raspberry Pi", level: 90, icon: "🥧" },
        { name: "FPGA/Verilog", level: 82, icon: "💾" },
        { name: "ARM Assembly", level: 78, icon: "🔩" }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "React", level: 89, icon: "⚛️" },
        { name: "Node.js", level: 86, icon: "🟢" },
        { name: "TypeScript", level: 91, icon: "📘" },
        { name: "Next.js", level: 84, icon: "▲" },
        { name: "MongoDB", level: 80, icon: "🍃" }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", level: 94, icon: "📚" },
        { name: "Docker", level: 87, icon: "🐳" },
        { name: "AWS", level: 83, icon: "☁️" },
        { name: "ROS", level: 85, icon: "🤖" },
        { name: "Linux", level: 91, icon: "🐧" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl animate-float delay-1000"></div>
        
        {/* Circuit-like Lines */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <path d="M0,400 Q300,200 600,400 T1200,400" stroke="url(#gradient1)" strokeWidth="2" fill="none" className="animate-pulse" />
            <path d="M0,200 Q400,400 800,200 T1200,200" stroke="url(#gradient2)" strokeWidth="1" fill="none" className="animate-pulse delay-500" />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3"/>
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-6">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full animate-fade-in delay-300"></div>
          </div>
          <p className="text-xl text-white/70 max-w-2xl mx-auto animate-fade-in delay-200">
            Proficient in cutting-edge technologies across AI, embedded systems, and full-stack development
          </p>
        </div>

        {/* Enhanced Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/20 animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse"></div>
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="relative animate-fade-in-left"
                    style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl animate-bounce" style={{ animationDelay: `${skillIndex * 200}ms` }}>
                          {skill.icon}
                        </span>
                        <span className="text-white font-medium group-hover:text-cyan-300 transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-cyan-300 font-bold text-lg">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Enhanced Progress Bar */}
                    <div className="relative w-full bg-white/10 rounded-full h-3 overflow-hidden backdrop-blur-sm border border-white/10">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 via-cyan-400 to-teal-400 rounded-full transition-all duration-1500 ease-out relative overflow-hidden"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 200) + (skillIndex * 100) + 500}ms`
                        }}
                      >
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[slide-right_2s_ease-in-out_infinite] transform -skew-x-12"></div>
                      </div>
                      
                      {/* Glow Effect */}
                      <div
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500/50 to-cyan-400/50 rounded-full blur-sm opacity-50"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 200) + (skillIndex * 100) + 500}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Corner Glow */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-2xl"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Additional Info */}
        <div className="mt-16 text-center animate-slide-up delay-500">
          <div className="inline-flex items-center space-x-12 bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-xl rounded-full px-12 py-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/20">
            <div className="text-center animate-scale-in delay-600">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">50+</div>
              <div className="text-sm text-white/70 mt-1">Projects</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
            <div className="text-center animate-scale-in delay-700">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">3+</div>
              <div className="text-sm text-white/70 mt-1">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
            <div className="text-center animate-scale-in delay-800">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">20+</div>
              <div className="text-sm text-white/70 mt-1">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
