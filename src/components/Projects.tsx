
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
    <section id="projects" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Header */}
        <div className="mb-20 animate-fade-in">
          <h2 className="text-5xl font-light text-white mb-4">Projects</h2>
          <div className="w-12 h-px bg-white/20"></div>
        </div>

        {/* Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Simple Image */}
              <div className="aspect-video mb-6 overflow-hidden rounded-lg bg-white/5">
                <img
                  src={`https://images.unsplash.com/${project.image}?w=600&h=400&fit=crop`}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Clean Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-light text-white">
                  {project.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {project.description}
                </p>

                {/* Simple Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm text-white/70 border border-white/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Minimal Links */}
                <div className="flex space-x-4 pt-2">
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                    <Github size={20} />
                  </a>
                  <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                    <ExternalLink size={20} />
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
