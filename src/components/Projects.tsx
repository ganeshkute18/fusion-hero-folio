
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "AI Traffic Optimizer",
      description: "Deep learning model that optimizes traffic flow using real-time data from embedded sensors.",
      tech: ["Python", "TensorFlow", "Raspberry Pi"],
      image: "photo-1518770660439-4636190af475"
    },
    {
      title: "Smart Home IoT Platform",
      description: "Full-stack IoT platform with React frontend and Arduino-based sensor network.",
      tech: ["React", "Node.js", "Arduino"],
      image: "photo-1581091226825-a6a2a5aee158"
    },
    {
      title: "Neural Network Accelerator",
      description: "Hardware acceleration for CNN inference using FPGA, achieving 10x speedup.",
      tech: ["Verilog", "FPGA", "Python"],
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Autonomous Drone Controller",
      description: "ROS-based autonomous navigation system with computer vision for obstacle avoidance.",
      tech: ["ROS", "C++", "OpenCV"],
      image: "photo-1488590528505-98d2b5aba04b"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Header */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-light text-gray-900 mb-2">Projects</h2>
          <div className="w-12 h-px bg-gray-200"></div>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group animate-fade-in bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-sm transition-shadow duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Compact Image */}
              <div className="aspect-video overflow-hidden bg-gray-50">
                <img
                  src={`https://images.unsplash.com/${project.image}?w=400&h=250&fit=crop`}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Compact Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-light text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Compact Tech Stack */}
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs text-gray-500 bg-gray-50 border border-gray-100 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Compact Links */}
                <div className="flex space-x-3 pt-2">
                  <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors duration-300">
                    <Github size={16} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors duration-300">
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
