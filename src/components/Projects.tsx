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
        return <Database className="w-6 h-6" />;
      case 'AI/ML':
        return <Brain className="w-6 h-6" />;
      case 'Computer Vision':
        return <Traffic className="w-6 h-6" />;
      default:
        return <Database className="w-6 h-6" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Backend':
        return 'from-blue-500 to-cyan-500';
      case 'AI/ML':
        return 'from-purple-500 to-pink-500';
      case 'Computer Vision':
        return 'from-green-500 to-emerald-500';
      default:
        return 'from-blue-500 to-cyan-500';
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animationType="slideUp"
              delay={200 + (index * 150)}
            >
              <div className="group backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl hover:bg-white/15 dark:hover:bg-gray-900/15 transition-all duration-300 h-full">
                {/* Project Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(project.category)}/20 border border-current/30`}>
                    <div className={`text-transparent bg-gradient-to-r ${getCategoryColor(project.category)} bg-clip-text`}>
                      {getProjectIcon(project.category)}
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(project.category)}/20 border border-current/30 text-transparent bg-gradient-to-r ${getCategoryColor(project.category)} bg-clip-text`}>
                    {project.category}
                  </span>
                </div>

                {/* Project Title & Description */}
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 rounded-md border border-white/30 dark:border-gray-700/30 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 border border-white/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-200 text-sm font-medium text-gray-700 dark:text-gray-300"
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
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg backdrop-blur-sm bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 hover:from-blue-500/30 hover:to-purple-600/30 transition-all duration-200 text-sm font-medium text-blue-600 dark:text-blue-400"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </a>
                  )}
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