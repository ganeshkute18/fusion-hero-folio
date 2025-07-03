
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
    <section id="skills" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Header */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-light text-gray-900 mb-2">Skills</h2>
          <div className="w-12 h-px bg-gray-200"></div>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-light text-gray-900 mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center justify-between py-2 border-b border-gray-50">
                    <span className="text-gray-700 text-sm">{skill}</span>
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
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
