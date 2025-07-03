
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Traffic Optimizer",
      description: "Deep learning model that optimizes traffic flow using real-time data from embedded sensors and computer vision.",
      tech: ["Python", "TensorFlow", "OpenCV", "Raspberry Pi"],
      category: "AI + Embedded Systems",
      image: "photo-1518770660439-4636190af475",
      featured: true
    },
    {
      title: "Smart Home IoT Platform",
      description: "Full-stack IoT platform with React frontend, Node.js backend, and Arduino-based sensor network.",
      tech: ["React", "Node.js", "Arduino", "MongoDB"],
      category: "IoT & Web Development",
      image: "photo-1581091226825-a6a2a5aee158",
      featured: true
    },
    {
      title: "Neural Network Accelerator",
      description: "Hardware acceleration for CNN inference using FPGA, achieving 10x speedup over CPU implementation.",
      tech: ["Verilog", "FPGA", "Python", "SystemVerilog"],
      category: "Hardware + AI",
      image: "photo-1461749280684-dccba630e2f6",
      featured: true
    },
    {
      title: "Autonomous Drone Controller",
      description: "ROS-based autonomous navigation system with computer vision for obstacle avoidance and path planning.",
      tech: ["ROS", "C++", "OpenCV", "Gazebo"],
      category: "Robotics + AI",
      image: "photo-1488590528505-98d2b5aba04b",
      featured: false
    },
    {
      title: "Real-time Audio Processing",
      description: "DSP algorithms for real-time audio enhancement using ARM Cortex-M microcontrollers.",
      tech: ["C", "ARM Assembly", "MATLAB", "Keil"],
      category: "Signal Processing",
      image: "photo-1487058792275-0ad4aaf24ca7",
      featured: false
    },
    {
      title: "Machine Learning Dashboard",
      description: "Interactive web dashboard for visualizing ML model performance and hyperparameter tuning.",
      tech: ["React", "D3.js", "Flask", "scikit-learn"],
      category: "Web + ML",
      image: "photo-1498050108023-c5249f4df085",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Exploring the intersection of AI, embedded systems, and innovative technology
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 ${
                project.featured ? 'lg:col-span-1 lg:row-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={`https://images.unsplash.com/${project.image}?w=600&h=400&fit=crop`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-cyan-500/80 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-md text-sm text-cyan-200 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 rounded-lg transition-colors text-cyan-300 hover:text-cyan-200">
                    <Github size={16} />
                    <span>Code</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white/80 hover:text-white">
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
