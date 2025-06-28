import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Blog from './components/Blog';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import SectionTransition from './components/SectionTransition';

function HomePage() {
  return (
    <>
      <SectionTransition direction="fade">
        <Hero />
      </SectionTransition>
      
      <SectionTransition direction="up" delay={200}>
        <About />
      </SectionTransition>
      
      <SectionTransition direction="up" delay={100}>
        <Projects />
      </SectionTransition>
      
      <SectionTransition direction="up" delay={150}>
        <Experience />
      </SectionTransition>
      
      <SectionTransition direction="up" delay={100}>
        <TechStack />
      </SectionTransition>
      
      <SectionTransition direction="up" delay={200}>
        <Blog />
      </SectionTransition>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <PageTransition>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </PageTransition>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;