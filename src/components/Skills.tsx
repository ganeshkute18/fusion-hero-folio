
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
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Proficient in cutting-edge technologies across AI, embedded systems, and full-stack development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/10 group"
              style={{ animationDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-purple-300 transition-colors">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="relative"
                    style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-cyan-300 font-bold">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 200) + (skillIndex * 100) + 500}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white/5 backdrop-blur-sm rounded-full px-8 py-4 border border-white/10">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-300">50+</div>
              <div className="text-sm text-white/70">Projects</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-300">3+</div>
              <div className="text-sm text-white/70">Years Experience</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-300">10+</div>
              <div className="text-sm text-white/70">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
