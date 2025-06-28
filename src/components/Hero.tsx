import React from 'react';
import { Github, Mail, MapPin, ChevronDown, Linkedin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%233B82F6%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 sm:pt-8">
        {/* Main Content Card */}
        <AnimatedSection animationType="scaleIn" delay={300}>
          <div className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/20 dark:border-gray-700/20 shadow-2xl">
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <AnimatedSection animationType="slideDown" delay={600}>
                  <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in leading-tight py-1 sm:py-2 break-words">
                    Jha Saket Sunil
                  </h1>
                </AnimatedSection>
                
                <AnimatedSection animationType="fadeIn" delay={800}>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 font-medium">
                    AI Engineer · Backend Developer 
                  </p>
                </AnimatedSection>
              </div>

              <AnimatedSection animationType="slideUp" delay={1000}>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  Pursuing B.Tech at the National Institute of Technology Karnataka, Surathkal. Passionate about building scalable backend systems and developing cutting-edge AI solutions.
                </p>
              </AnimatedSection>

              {/* Contact Cards */}
              <AnimatedSection animationType="slideUp" delay={1200}>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
                  <a
                    href="mailto:saketjha0324@gmail.com"
                    className="backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 rounded-xl p-3 sm:p-4 border border-white/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-200 group"
                  >
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2 text-blue-500 group-hover:scale-110 transition-transform duration-200" />
                    <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Email</p>
                  </a>

                  <a
                    href="https://linkedin.com/in/saketjha34"
                    target="_blank"
                    className="backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 rounded-xl p-3 sm:p-4 border border-white/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-200 group"
                  >
                    <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2 text-blue-500 group-hover:scale-110 transition-transform duration-200" />
                    <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">LinkedIn</p>
                  </a>
                  
                  <a
                    href="https://github.com/saketjha34"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 rounded-xl p-3 sm:p-4 border border-white/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-200 group"
                  >
                    <Github className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform duration-200" />
                    <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">GitHub</p>
                  </a>
                  
                  <div className="backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 rounded-xl p-3 sm:p-4 border border-white/30 dark:border-gray-700/30">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-1 sm:mb-2 text-red-500" />
                    <p className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Mumbai, India</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>

        {/* Scroll Indicator */}
        <AnimatedSection animationType="fadeIn" delay={1500}>
          <button
            onClick={scrollToAbout}
            className="mt-6 sm:mt-8 p-2 rounded-full backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 border border-white/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-200 animate-bounce"
          >
            <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400" />
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;