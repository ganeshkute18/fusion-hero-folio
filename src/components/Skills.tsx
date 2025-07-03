
export const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: ["Python", "TensorFlow", "PyTorch", "OpenCV", "scikit-learn"]
    },
    {
      title: "Embedded Systems",
      skills: ["C/C++", "Arduino", "Raspberry Pi", "FPGA", "ARM Assembly"]
    },
    {
      title: "Web Development",
      skills: ["React", "Node.js", "TypeScript", "Next.js", "MongoDB"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS", "ROS", "Linux"]
    }
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Header */}
        <div className="mb-20 animate-fade-in">
          <h2 className="text-5xl font-light text-white mb-4">Skills</h2>
          <div className="w-12 h-px bg-white/20"></div>
        </div>

        {/* Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-light text-white mb-8">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="text-white/80">{skill}</span>
                    <div className="w-2 h-2 bg-cyan-400/60 rounded-full"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
