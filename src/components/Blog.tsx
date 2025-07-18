import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';

const Blog: React.FC = () => {
  const navigate = useNavigate();

  const blogPosts: BlogPost[] = [
    // {
    //   id: '1',
    //   title: 'Building Scalable Backend Systems with FastAPI and PostgreSQL',
    //   excerpt: 'Building scalable backend systems is one of the most critical aspects of modern software development. In this comprehensive guide, we\'ll explore how to design and implement robust backend architectures using FastAPI and PostgreSQL.',
    //   date: '2024-12-15',
    //   readTime: '8 min read',
    //   tags: ['Backend', 'FastAPI', 'PostgreSQL', 'Scalability', 'Performance']
    // },
    {
      id: '2',
      title: 'Semantic Search with FAISS: From Theory to Production',
      excerpt: 'A comprehensive guide to implementing semantic search systems using FAISS and sentence transformers, with real-world examples and optimization techniques.',
      date: '2025-05-10',
      readTime: '25 min read',
      tags: ['FAISS', 'NLP', 'Semantic Search']
    },
    // {
    //   id: '3',
    //   title: 'Computer Vision in Traffic Management: A Deep Dive into ATLAS',
    //   excerpt: 'Traffic congestion is one of the most pressing urban challenges of our time. ATLAS represents a paradigm shift, using cutting-edge computer vision to create intelligent, responsive traffic management systems.',
    //   date: '2024-12-05',
    //   readTime: '10 min read',
    //   tags: ['Computer Vision', 'YOLOv8', 'Traffic', 'AI', 'ByteTrack']
    // }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const handleReadMore = (postId: string) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <section id="blog" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-50/30 to-transparent dark:via-pink-900/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 leading-tight py-2">
            Blog & Insights
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Sharing knowledge about backend development, AI engineering, and emerging technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="group backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 rounded-2xl p-6 border border-white/20 dark:border-gray-700/20 shadow-xl hover:shadow-2xl hover:bg-white/15 dark:hover:bg-gray-900/15 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
              onClick={() => handleReadMore(post.id)}
            >
              {/* Post Meta */}
              <div className="flex items-center justify-between mb-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Post Title */}
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                {post.title}
              </h3>

              {/* Post Excerpt */}
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center space-x-1 px-2 py-1 text-xs font-medium backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 rounded-md border border-white/30 dark:border-gray-700/30 text-gray-700 dark:text-gray-300"
                    >
                      <Tag className="w-3 h-3" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Read More */}
              <div className="flex items-center justify-between">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleReadMore(post.id);
                  }}
                  className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 group/btn"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </article>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Blog;