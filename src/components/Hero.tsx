import React from 'react';
import { Github, Mail, MapPin, ChevronDown, Linkedin } from 'lucide-react';

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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content Card */}
        <div className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 rounded-3xl p-8 sm:p-12 border border-white/20 dark:border-gray-700/20 shadow-2xl">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in leading-tight py-2">
                Jha Saket Sunil
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-medium">
                AI Engineer · Backend Developer 
              </p>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Pursuing B.Tech at the National Institute of Technology Karnataka, Surathkal. Passionate about building scalable backend systems and developing cutting-edge AI solutions.
            </p>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              <a
                href="mailto:saketjha0324@gmail.com"
                className="backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 rounded-xl p-4 border border-white/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-200 group"
              >
                <Mail className="w-6 h-6 mx-auto mb-2 text-blue-500 group-hover:scale-110 transition-transform duration-200" />
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</p>
              </a>

              <a
                href="https://linkedin.com/in/saketjha34"
                target="_blank"
                className="backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 rounded-xl p-4 border border-white/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-200 group"
              >
                <Linkedin className="w-6 h-6 mx-auto mb-2 text-blue-500 group-hover:scale-110 transition-transform duration-200" />
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">LinkedIn</p>
              </a>
              
              <a
                href="https://github.com/saketjha34"
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 rounded-xl p-4 border border-white/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-200 group"
              >
                <Github className="w-6 h-6 mx-auto mb-2 text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform duration-200" />
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">GitHub</p>
              </a>
              
              <div className="backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 rounded-xl p-4 border border-white/30 dark:border-gray-700/30">
                <MapPin className="w-6 h-6 mx-auto mb-2 text-red-500" />
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Mumbai, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="mt-8 p-2 rounded-full backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 border border-white/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-200 animate-bounce"
        >
          <ChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;