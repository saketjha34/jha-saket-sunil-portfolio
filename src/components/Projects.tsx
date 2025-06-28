import React from 'react';
import { Github, ExternalLink, Database, Brain, TrafficCone as Traffic } from 'lucide-react';
import { Project } from '../types';

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
        return <Database className="w-4 h-4" />;
      case 'AI/ML':
        return <Brain className="w-4 h-4" />;
      case 'Computer Vision':
        return <Traffic className="w-4 h-4" />;
      default:
        return <Database className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Backend':
        return 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700/50';
      case 'AI/ML':
        return 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700/50';
      case 'Computer Vision':
        return 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700/50';
      default:
        return 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700/50';
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-900/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 leading-tight py-2">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work in backend development, AI engineering, and computer vision
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 rounded-xl p-6 border border-white/20 dark:border-gray-700/20 shadow-lg hover:shadow-xl hover:bg-white/15 dark:hover:bg-gray-900/15 transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center justify-between">
                {/* Left: Project Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-4 mb-3">
                    {/* Project Title */}
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    
                    {/* Category Badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(project.category)}`}>
                      {getProjectIcon(project.category)}
                      <span>{project.category}</span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm font-medium backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 rounded-md border border-white/30 dark:border-gray-700/30 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Action Buttons */}
                <div className="flex gap-3 ml-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 border border-white/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-200 text-sm font-medium text-gray-700 dark:text-gray-300 hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-sm bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 hover:from-blue-500/30 hover:to-purple-600/30 transition-all duration-200 text-sm font-medium text-blue-600 dark:text-blue-400 hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;