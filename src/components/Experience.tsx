import React from 'react';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-50/30 to-transparent dark:via-indigo-900/10"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional experience in AI engineering and scalable system development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Card */}
          <div className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6 space-y-4 lg:space-y-0">
              {/* Company Logo/Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Experience Details */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1">
                      AI Engineer Intern
                    </h3>
                    <p className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      KALPPO
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      May 2025 – July 2025
                    </span>
                  </div>
                </div>

                <div className="backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 rounded-xl p-6 border border-white/20 dark:border-gray-700/20 mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                    Key Achievements
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-400">
                        <span className="font-semibold">Built a scalable OCR-based workbook evaluation pipeline</span> using 
                        Gemini AI and Fuzzy Matching algorithms for automated assessment
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-400">
                        <span className="font-semibold">Reduced manual grading time by 80%</span> through intelligent 
                        automation and machine learning optimization
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-400">
                        <span className="font-semibold">Implemented robust error handling and validation</span> to ensure 
                        accurate assessment results with minimal false positives
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skills Gained */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    Technologies & Skills Applied
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Gemini AI', 'OCR Processing', 'Fuzzy Matching', 'Python', 'Machine Learning', 'Pipeline Architecture', 'Data Processing', 'System Optimization'].map((skill, index) => (
                      <span
                        key={index}
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
        </div>
      </div>
    </section>
  );
};

export default Experience;