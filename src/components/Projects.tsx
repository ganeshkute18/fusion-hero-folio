
import { ExternalLink, Github, ChevronRight } from "lucide-react";

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
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block p-4 rounded-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>
          <p className="text-xl text-white/70 max-w-2xl mx-auto animate-fade-in delay-200">
            Exploring the intersection of AI, embedded systems, and innovative technology
          </p>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/25 animate-scale-in ${
                project.featured ? 'lg:col-span-1 lg:row-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Enhanced Project Image */}
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={`https://images.unsplash.com/${project.image}?w=600&h=400&fit=crop`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Enhanced Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-cyan-500/80 to-purple-500/80 backdrop-blur-sm rounded-full text-sm font-medium text-white shadow-lg">
                  {project.category}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-purple-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Enhanced Project Content */}
              <div className="p-6 relative">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300 flex items-center justify-between">
                  {project.title}
                  <ChevronRight size={20} className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
                </h3>
                <p className="text-white/70 mb-4 line-clamp-3 group-hover:text-white/90 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Enhanced Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-cyan-200 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/20 transition-all duration-300 animate-fade-in"
                      style={{ animationDelay: `${index * 150 + techIndex * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Enhanced Project Links */}
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 hover:from-cyan-500/40 hover:to-cyan-600/40 rounded-lg transition-all duration-300 text-cyan-300 hover:text-cyan-200 border border-cyan-500/30 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/25">
                    <Github size={16} />
                    <span>Code</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 rounded-lg transition-all duration-300 text-white/80 hover:text-white border border-white/20 hover:border-white/40 hover:shadow-lg">
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </button>
                </div>
              </div>

              {/* Enhanced Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Enhanced View All Projects Button */}
        <div className="text-center mt-16 animate-fade-in delay-500">
          <button className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 hover:from-cyan-500/20 hover:to-purple-500/20 rounded-full border border-white/20 hover:border-cyan-400/50 text-white/80 hover:text-white font-medium transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
            <span>View All Projects</span>
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};
