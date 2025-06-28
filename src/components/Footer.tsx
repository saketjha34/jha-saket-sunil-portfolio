import React from 'react';
import { Github, Mail, MapPin, Heart, ExternalLink, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/saketjha34',
      icon: Github,
      color: 'hover:text-blue-600 dark:hover:text-gray-200'
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/saketjha34/',
      icon: Linkedin,
      color: 'hover:text-blue-600 dark:hover:text-green-400'
    },
    {
      name: 'Email',
      href: 'mailto:saketjha0324@gmail.com',
      icon: Mail,
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Blog', href: '#blog' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 backdrop-blur-xl bg-white/5 dark:bg-gray-900/5 border-t border-white/10 dark:border-gray-700/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-50/20 via-transparent to-transparent dark:from-blue-900/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <button
                onClick={scrollToTop}
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Jha Saket Sunil
              </button>
              <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-md">
                AI Engineer · Backend Developer
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Pursuing B.Tech at the National Institute of Technology Karnataka, Surathkal. Passionate about building scalable backend systems and developing cutting-edge AI solutions.
            </p>
            
            {/* Location */}
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-6">
              <MapPin className="w-4 h-4 text-red-500" />
              <span>Mumbai, India</span>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`p-3 rounded-lg backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/20 text-gray-600 dark:text-gray-400 ${link.color} transition-all duration-200 hover:bg-white/20 dark:hover:bg-gray-800/20 hover:scale-105`}
                  title={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:saketjha0324@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  saketjha0324@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919370456334"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 text-sm"
                >
                  +91-9370456334
                </a>
              </li>
              <li>
                <a
                  href="https://drive.usercontent.google.com/u/0/uc?id=1UaG16BqQ5HW4JYqmpWKhGHaHt1nEzmAb&export=download"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg backdrop-blur-sm bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 hover:from-blue-500/30 hover:to-purple-600/30 transition-all duration-200 text-sm font-medium text-blue-600 dark:text-blue-400"
                >
                  <span>Download Resume</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 dark:border-gray-700/10">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm">
              <span>© {currentYear} Jha Saket Sunil </span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
              <button
                onClick={scrollToTop}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Back to Top
              </button>
              <span>•</span>
              <span>Built with React, TypeScript, and Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;