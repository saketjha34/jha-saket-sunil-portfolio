import React from 'react';
import { 
  SiPython, SiCplusplus, SiPostgresql, SiMysql, SiRedis, SiDocker, 
  SiGit, SiGooglecloud, SiKubernetes, SiFastapi, SiPytorch, 
  SiTensorflow, SiScikitlearn, SiPandas, SiOpencv, SiJavascript,
  SiTypescript, SiReact, SiNodedotjs, SiMongodb, SiAmazonwebservices,
  SiLinux, SiJupyter, SiStreamlit, SiGraphql, SiPostman, SiNginx
} from 'react-icons/si';
import { Code2, Globe, Settings } from 'lucide-react';

interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const TechStack: React.FC = () => {
  const allTechnologies: TechItem[] = [
    // Programming Languages
    { name: 'Python', icon: SiPython, color: 'text-yellow-500' },
    { name: 'C/C++', icon: SiCplusplus, color: 'text-blue-600' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
    
    // Databases & Storage
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700' },
    { name: 'MySQL', icon: SiMysql, color: 'text-orange-500' },
    { name: 'Redis', icon: SiRedis, color: 'text-red-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
    
    // Backend & APIs
    { name: 'FastAPI', icon: SiFastapi, color: 'text-teal-500' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
    { name: 'GraphQL', icon: SiGraphql, color: 'text-pink-500' },
    { name: 'Nginx', icon: SiNginx, color: 'text-green-500' },
    
    // AI/ML & Data Science
    { name: 'PyTorch', icon: SiPytorch, color: 'text-orange-600' },
    { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-500' },
    { name: 'Scikit-learn', icon: SiScikitlearn, color: 'text-orange-400' },
    { name: 'Pandas', icon: SiPandas, color: 'text-blue-600' },
    { name: 'OpenCV', icon: SiOpencv, color: 'text-red-600' },
    
    // DevOps & Cloud
    { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
    { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-600' },
    { name: 'Google Cloud', icon: SiGooglecloud, color: 'text-blue-500' },
    { name: 'AWS', icon: SiAmazonwebservices, color: 'text-orange-500' },
    
    // Tools & Development
    { name: 'Git', icon: SiGit, color: 'text-orange-600' },
    { name: 'VS Code', icon: Code2, color: 'text-blue-500' },
    { name: 'Jupyter', icon: SiJupyter, color: 'text-orange-500' },
    { name: 'Streamlit', icon: SiStreamlit, color: 'text-red-500' },
    { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
    { name: 'React', icon: SiReact, color: 'text-blue-400' },
  ];

  return (
    <section id="tech-stack" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50/30 to-transparent dark:via-green-900/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build scalable, efficient, and innovative solutions
          </p>
        </div>

        {/* Main Tech Grid */}
        <div className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {allTechnologies.map((tech, index) => (
              <div
                key={tech.name}
                className="group backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex flex-col items-center space-y-3">
                  {/* Tech Icon */}
                  <div className="relative">
                    <tech.icon className={`w-12 h-12 ${tech.color} group-hover:scale-110 transition-transform duration-200`} />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Tech Name */}
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {tech.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-xl text-center">
            <div className="flex items-center justify-center mb-4">
              <Settings className="w-8 h-8 text-blue-500" />
            </div>
            <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">25+</h4>
            <p className="text-gray-600 dark:text-gray-400">Technologies Mastered</p>
          </div>
          
          <div className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-xl text-center">
            <div className="flex items-center justify-center mb-4">
              <Settings className="w-8 h-8 text-green-500" />
            </div>
            <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">3+</h4>
            <p className="text-gray-600 dark:text-gray-400">Years of Experience</p>
          </div>
          
          <div className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-xl text-center">
            <div className="flex items-center justify-center mb-4">
              <Globe className="w-8 h-8 text-purple-500" />
            </div>
            <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">10+</h4>
            <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;