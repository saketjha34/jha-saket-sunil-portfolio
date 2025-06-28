import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#tech-stack', label: 'Tech Stack' },
    { href: '#blog', label: 'Blog' },
  ];

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const scrollToSection = (href: string) => {
    if (!isHomePage) {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-white/20 dark:border-gray-700/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={handleLogoClick}
            className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
          >
            Saket Jha
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-500 dark:hover:text-blue-400 ${
                  isHomePage && activeSection === item.href.slice(1)
                    ? 'text-blue-500 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 border border-white/40 dark:border-gray-700/40 hover:bg-white/40 dark:hover:bg-gray-800/40 transition-all duration-200"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-2 px-4 py-2 rounded-lg backdrop-blur-sm bg-gradient-to-r from-blue-500/30 to-purple-600/30 border border-blue-500/40 hover:from-blue-500/40 hover:to-purple-600/40 transition-all duration-200 text-sm font-medium"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 border border-white/40 dark:border-gray-700/40"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 backdrop-blur-sm bg-white/20 dark:bg-gray-900/20 rounded-lg mb-4 border border-white/30 dark:border-gray-700/30">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-blue-500 dark:hover:text-blue-400 ${
                    isHomePage && activeSection === item.href.slice(1)
                      ? 'text-blue-500 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-blue-500 dark:text-blue-400"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;