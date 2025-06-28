import React from 'react';
import { GraduationCap, Award, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-900/10"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 leading-tight py-2">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate about creating intelligent systems and scalable solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Hello, I'm Saket! 👋
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                I'm a B.Tech Civil Engineering student at NIT Karnataka with a minor in Information Technology. 
                My journey in tech began with curiosity about how systems work at scale, leading me to specialize 
                in backend development and AI engineering.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                I'm passionate about building robust, scalable systems that solve real-world problems. Whether 
                it's developing distributed file systems, creating intelligent recommendation engines, or 
                optimizing traffic flow with computer vision, I love tackling complex challenges.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Currently pursuing my degree while actively contributing to open-source projects and 
                participating in competitive programming. I believe in continuous learning and staying 
                updated with the latest technologies in AI and backend development.
              </p>
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="space-y-6">
            {/* Education Card */}
            <div className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-xl">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-blue-500/20 border border-blue-500/30">
                  <GraduationCap className="w-6 h-6 text-blue-500" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                    NIT Karnataka
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                    B.Tech Civil Engineering
                  </p>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                    Minor in Information Technology
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                    Aug 2023 – May 2027
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    CGPA: <span className="font-semibold text-green-600 dark:text-green-400">9.5</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Achievement Card */}
            <div className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-xl">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-yellow-500/20 border border-yellow-500/30">
                  <Award className="w-6 h-6 text-yellow-500" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                    Kaggle Competition Winner
                  </h4>
                  <p className="text-yellow-600 dark:text-yellow-400 font-medium mb-2">
                    Skill Assessment ML Competition
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Ranked <span className="font-bold text-green-600 dark:text-green-400">1st out of 1,846</span> participants
                  </p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/30">
                  <MapPin className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    Based in Mumbai, India
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Available for remote opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;