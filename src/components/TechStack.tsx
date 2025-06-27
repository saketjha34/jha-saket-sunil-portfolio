import React from 'react';
import {
  SiPython, SiCplusplus, SiPostgresql, SiMysql, SiRedis, SiDocker,
  SiGit, SiGooglecloud, SiKubernetes, SiFastapi, SiPytorch,
  SiTensorflow, SiScikitlearn, SiPandas, SiOpencv,
  SiAmazonwebservices, SiJupyter, SiPostman, SiNginx, SiMinio, SiLangchain, SiAlchemy, SiMlflow
} from 'react-icons/si';

interface TechItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

// Custom SVG Icon Components
const HuggingFaceIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 256 256" fill="currentColor" aria-label="Hugging Face" xmlns="http://www.w3.org/2000/svg">
    <path d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zM93 98c11 0 20 11 20 25s-9 25-20 25-20-11-20-25 9-25 20-25zm70 0c11 0 20 11 20 25s-9 25-20 25-20-11-20-25 9-25 20-25zm-35 102c-29 0-54-17-64-42h128c-10 25-35 42-64 42z" />
  </svg>
);

const CeleryIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-label="Celery" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.6 2.6l-5 5 1.4 1.4 5-5L19.6 2.6zM17 1l-6 6 1.4 1.4 6-6L17 1zM3 13l4 4v6h2v-6l4-4-6-6-4 4v2l2-2 4 4-4 4-2-2z" />
  </svg>
);

const DeepEvalIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-label="DeepEval"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Magnifying glass */}
    <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
    <line x1="14" y1="14" x2="20" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    {/* Checkmark */}
    <polyline
      points="8,10 10.5,13 15,8"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PydanticIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-label="Pydantic"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Shield outline */}
    <path
      d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3z"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    {/* Gear center circle */}
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    {/* Gear teeth */}
    <path
      d="M12 9v-2m0 10v-2m-2.12-5.88l-1.41-1.41m7.07 7.07l-1.41-1.41m-5.66 0l1.41-1.41m7.07-7.07l-1.41 1.41"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const TechStack: React.FC = () => {
  const allTechnologies: TechItem[] = [
    // Languages
    { name: 'Python', icon: SiPython, color: 'text-yellow-500' },
    { name: 'C/C++', icon: SiCplusplus, color: 'text-blue-600' },

    // Databases & Cache
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700' },
    { name: 'MySQL', icon: SiMysql, color: 'text-orange-500' },
    { name: 'Redis', icon: SiRedis, color: 'text-red-500' },
    { name: 'Minio', icon: SiMinio, color: 'text-red-500' },

    // Backend & Infra
    { name: 'FastAPI', icon: SiFastapi, color: 'text-teal-500' },
    { name: 'Nginx', icon: SiNginx, color: 'text-green-500' },
    { name: 'Celery', icon: CeleryIcon, color: 'text-lime-600' },
    { name: 'SQLAlchemy', icon: SiAlchemy, color: 'text-lime-600' },
    { name: 'Pydantic', icon: PydanticIcon, color: 'text-red-600' },

    // ML/DL
    { name: 'PyTorch', icon: SiPytorch, color: 'text-orange-600' },
    { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-500' },
    { name: 'Scikit-learn', icon: SiScikitlearn, color: 'text-orange-400' },
    { name: 'Pandas', icon: SiPandas, color: 'text-blue-600' },
    { name: 'OpenCV', icon: SiOpencv, color: 'text-red-600' },
    { name: 'Hugging Face', icon: HuggingFaceIcon, color: 'text-yellow-400' },
    { name: 'Langchain', icon: SiLangchain, color: 'text-yellow-400' },
    { name: 'DeepEval', icon: DeepEvalIcon, color: 'text-purple-500' },
    { name: 'Mlflow', icon: SiMlflow, color: 'text-blue-500' },

    // DevOps / Cloud
    { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
    { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-600' },
    { name: 'Google Cloud', icon: SiGooglecloud, color: 'text-blue-500' },
    { name: 'AWS', icon: SiAmazonwebservices, color: 'text-orange-500' },

    // Tools
    { name: 'Git', icon: SiGit, color: 'text-orange-600' },
    { name: 'Jupyter', icon: SiJupyter, color: 'text-orange-500' },
    { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
  ];

  return (
    <section id="tech-stack" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50/30 to-transparent dark:via-green-900/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build scalable, efficient, and innovative solutions.
          </p>
        </div>

        <div className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {allTechnologies.map((tech, index) => (
              <div
                key={tech.name}
                className="group backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="relative">
                    <tech.icon className={`w-12 h-12 ${tech.color} group-hover:scale-110 transition-transform duration-200`} />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {tech.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;