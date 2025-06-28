import React from 'react';
import { Github, ExternalLink, Database, Brain, TrafficCone as Traffic } from 'lucide-react';
import { Project } from '../types';
import AnimatedSection from './AnimatedSection';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: '1',
      title: 'FileForge',
      description: 'Distributed file system with nested folders, MinIO, and secure JWT+OAuth access. Dockerized FastAPI backend with PostgreSQL',
      techStack: ['FastAPI', 'PostgreSQL', 'MinIO', 'Docker', 'JWT', 'OAuth'],
      highlights: [
        'Distributed architecture with secure authentication',
        'Advanced metadata indexing for efficient file search',
        'Nested file & folder organization',
        'Dockerized deployment with horizontal scaling capabilities'
      ],
      category: 'Backend',
      github: 'https://github.com/saketjha34/FileForge/blob/main/README.md'
    },
    {
      id: '2',
      title: 'FilmFusion',
      description: 'Semantic movie recommender using FAISS and Sentence Transformers. Built with Streamlit; supports genre, language, and runtime filters.',
      techStack: ['Python', 'FAISS', 'Sentence Transformers', 'Streamlit', 'Pandas'],
      highlights: [
        'Semantic similarity search using vector embeddings',
        'Real-time filtering by multiple movie attributes',
        'Interactive Streamlit interface for user-friendly experience',
        'Efficient similarity computation with FAISS indexing'
      ],
      category: 'AI/ML',
      github: 'https://github.com/saketjha34/FilmFusion/blob/main/README.md'
    },
    {
      id: '3',
      title: 'ATLAS',
      description: 'Adaptive Traffic Light System using YOLOv8 and ByteTrack. Dynamic density-based green-light allocation with 25% efficiency gains.',
      techStack: ['YOLOv8', 'ByteTrack', 'OpenCV', 'Python', 'Computer Vision'],
      highlights: [
        'Real-time vehicle detection and tracking',
        'Dynamic traffic light timing based on density analysis',
        '25% improvement in traffic flow efficiency',
        'Adaptive algorithms for varying traffic conditions'
      ],
      category: 'Computer Vision',
      github: 'https://github.com/saketjha34/ATLAS/blob/main/README.md'
    }
  ];

  const getProjectIcon = (category: string) => {
    switch (category) {
      case 'Backend':
        return <Database className="w-5 h-5" />;
      case 'AI/ML':
        return <Brain className="w-5 h-5" />;
      case 'Computer Vision':
        return <Traffic className="w-5 h-5" />;
      default:
        return <Database className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Backend':
        return 'text-blue-600 dark:text-blue-400';
      case 'AI/ML':
        return 'text-purple-600 dark:text-purple-400';
      case 'Computer Vision':
        return 'text-green-600 dark:text-green-400';
      default:
        return 'text-blue-600 dark:text-blue-400';
    }
  };

  const getCategoryBg = (category: string) => {
    switch (category) {
      case 'Backend':
        return 'bg-blue-100 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700/50';
      case 'AI/ML':
        return 'bg-purple-100 dark:bg-purple-900/30 border-purple-200 dark:border-purple-700/50';
      case 'Computer Vision':
        return 'bg-green-100 dark:bg-green-900/30 border-green-200 dark:border-green-700/50';
      default:
        return 'bg-blue-100 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700/50';
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-900/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animationType="fadeIn" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 leading-tight py-2">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work in backend development, AI engineering, and computer vision
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animationType="slideUp"
              delay={200 + (index * 150)}
            >
              <div className="group backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl hover:bg-white/15 dark:hover:bg-gray-900/15 transition-all duration-300">
                
                {/* Project Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    {/* Title and Category */}
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {project.title}
                      </h3>
                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border ${getCategoryBg(project.category)} ${getCategoryColor(project.category)}`}>
                        {getProjectIcon(project.category)}
                        <span>{project.category}</span>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-lg">
                      {project.description}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 lg:ml-6 lg:flex-col lg:w-auto w-full">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 border border-white/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-200 text-sm font-medium text-gray-700 dark:text-gray-300 hover:scale-105"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg backdrop-blur-sm bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 hover:from-blue-500/30 hover:to-purple-600/30 transition-all duration-200 text-sm font-medium text-blue-600 dark:text-blue-400 hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-2 text-sm font-medium backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 rounded-lg border border-white/40 dark:border-gray-700/40 text-gray-700 dark:text-gray-300 hover:bg-white/40 dark:hover:bg-gray-800/40 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Key Features
                    </h4>
                    <ul className="space-y-3">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="text-gray-600 dark:text-gray-400 flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;