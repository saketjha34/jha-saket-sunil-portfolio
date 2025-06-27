import React from 'react';
import { Briefcase, Calendar, CheckCircle, } from 'lucide-react';

type ExperienceItem = {
  id: string;
  title: string;
  company: string;
  date: string;
  highlights: string[];
  skills: string[];
  logoUrl?: string; 
};

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      id: '1',
      title: 'AI Engineer Intern',
      company: 'KALPPO',
      date: 'May 2025 – July 2025',
      highlights: [
        'Built a scalable OCR-based workbook evaluation pipeline using Gemini AI and Fuzzy Matching algorithms for automated assessment',
        'Reduced manual grading time by 80% through intelligent automation and machine learning optimization',
        'Implemented robust error handling and validation to ensure accurate assessment results with minimal false positives'
      ],
      skills: [
        'Gemini AI',
        'OCR Processing',
        'Langchain',
        'Python',
        'Machine Learning',
        'Pipeline Architecture',
        'Data Processing',
        'System Optimization',
        'Docker',
        'Google Cloud Platform',
      ],
      logoUrl: '/logos/kalppo.jpeg' 
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/30 to-transparent dark:via-indigo-900/10" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional experience in AI engineering and scalable system development
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl hover:shadow-xl transition duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6 space-y-4 lg:space-y-0">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl overflow-hidden flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
                    {exp.logoUrl ? (
                      <img src={exp.logoUrl} alt={exp.company} className="w-full h-full object-contain p-2" />
                    ) : (
                      <Briefcase className="w-8 h-8 text-white" />
                    )}
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {exp.date}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 rounded-xl p-6 border border-white/20 dark:border-gray-700/20 mb-6">
                    {/* <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                      Key Achievements
                    </h4> */}
                    <div className="space-y-3">
                      {exp.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-600 dark:text-gray-400">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Technologies & Skills Applied
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium backdrop-blur-sm bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-full text-blue-600 dark:text-blue-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;