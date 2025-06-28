import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import { ArrowLeft, Calendar, Clock, Tag, Copy, Check } from 'lucide-react';
import copy from 'copy-to-clipboard';
import 'katex/dist/katex.min.css';
import 'highlight.js/styles/github-dark.css';

interface BlogPostData {
  id: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const loadBlogPost = async () => {
      if (!id) {
        setError('Blog post ID not found');
        setLoading(false);
        return;
      }

      try {
        // Load markdown content from public directory
        const response = await fetch(`/blogContent/${id}.md`);
        if (!response.ok) {
          throw new Error('Blog post not found');
        }
        
        const content = await response.text();
        
        // Extract metadata from markdown (if present) or use defaults
        const lines = content.split('\n');
        let title = `Blog Post ${id}`;
        let date = new Date().toISOString().split('T')[0];
        let readTime = '5 min read';
        let tags: string[] = [];

        // Look for metadata in the first few lines
        if (lines[0]?.startsWith('# ')) {
          title = lines[0].substring(2).trim();
        }

        // Look for metadata comments
        for (let i = 0; i < Math.min(10, lines.length); i++) {
          const line = lines[i].trim();
          if (line.startsWith('<!-- date:')) {
            date = line.match(/date:\s*(.+?)\s*-->/)?.[1] || date;
          } else if (line.startsWith('<!-- readTime:')) {
            readTime = line.match(/readTime:\s*(.+?)\s*-->/)?.[1] || readTime;
          } else if (line.startsWith('<!-- tags:')) {
            const tagMatch = line.match(/tags:\s*(.+?)\s*-->/)?.[1];
            if (tagMatch) {
              tags = tagMatch.split(',').map(tag => tag.trim());
            }
          }
        }

        // Remove metadata comments from content
        const cleanContent = lines
          .filter(line => !line.trim().startsWith('<!--'))
          .join('\n');

        setBlogPost({
          id,
          title,
          date,
          readTime,
          tags,
          content: cleanContent
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    loadBlogPost();
  }, [id]);

  const copyToClipboard = (text: string, codeId: string) => {
    try {
      // Clean the text by removing any extra whitespace and ensuring proper formatting
      const cleanText = text.trim();
      const success = copy(cleanText);
      
      if (success) {
        setCopiedCode(codeId);
        setTimeout(() => setCopiedCode(null), 2000);
      } else {
        console.error('Failed to copy to clipboard');
      }
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const scrollToBlogSection = () => {
    navigate('/');
    // Wait for navigation to complete, then scroll to blog section
    setTimeout(() => {
      const blogSection = document.getElementById('blog');
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const extractLanguageFromClassName = (className: string): string => {
    if (!className) return '';
    const match = className.match(/language-(\w+)/);
    return match ? match[1] : '';
  };

  const getLanguageDisplayName = (lang: string): string => {
    const languageMap: { [key: string]: string } = {
      'js': 'JavaScript',
      'javascript': 'JavaScript',
      'ts': 'TypeScript',
      'typescript': 'TypeScript',
      'py': 'Python',
      'python': 'Python',
      'java': 'Java',
      'cpp': 'C++',
      'c': 'C',
      'cs': 'C#',
      'php': 'PHP',
      'rb': 'Ruby',
      'ruby': 'Ruby',
      'go': 'Go',
      'rs': 'Rust',
      'rust': 'Rust',
      'sh': 'Shell',
      'bash': 'Bash',
      'sql': 'SQL',
      'html': 'HTML',
      'css': 'CSS',
      'scss': 'SCSS',
      'json': 'JSON',
      'xml': 'XML',
      'yaml': 'YAML',
      'yml': 'YAML',
      'dockerfile': 'Dockerfile',
      'md': 'Markdown',
      'markdown': 'Markdown'
    };
    
    return languageMap[lang.toLowerCase()] || lang.toUpperCase();
  };

  // Helper function to extract text content from React children
  const extractTextFromChildren = (children: any): string => {
    if (typeof children === 'string') {
      return children;
    }
    
    if (Array.isArray(children)) {
      return children.map(extractTextFromChildren).join('');
    }
    
    if (React.isValidElement(children)) {
      // Type guard ensures children is a ReactElement and props is accessible
      return extractTextFromChildren((children as React.ReactElement).props.children);
    }
    
    return '';
  };

  // Helper function to fix image paths
  const fixImagePath = (src: string): string => {
    // If the path starts with 'public/', remove it since public files are served from root
    if (src.startsWith('public/')) {
      return '/' + src.substring(7); // Remove 'public/' and add leading slash
    }
    
    // If it's already a proper path starting with /, return as is
    if (src.startsWith('/')) {
      return src;
    }
    
    // If it's a relative path, make it absolute from root
    return '/' + src;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 rounded-2xl p-8 border border-white/20 dark:border-gray-700/20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="text-center mt-4 text-gray-600 dark:text-gray-400">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error || !blogPost) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 text-center">
          <h1 className="text-2xl font-bold text-red-500 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">{error}</p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg backdrop-blur-sm bg-blue-500/20 border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-200 text-blue-600 dark:text-blue-400 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={scrollToBlogSection}
            className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-lg backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 border border-white/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-200 text-gray-700 dark:text-gray-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </button>

          <div className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              {blogPost.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(blogPost.date)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{blogPost.readTime}</span>
              </div>
            </div>

            {/* Tags */}
            {blogPost.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center space-x-1 px-3 py-1 text-xs font-medium backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 rounded-full border border-white/30 dark:border-gray-700/30 text-gray-700 dark:text-gray-300"
                  >
                    <Tag className="w-3 h-3" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Blog Content */}
        <article className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl">
          <div className="prose prose-lg prose-gray dark:prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeKatex, rehypeHighlight, rehypeRaw]}
              components={{
                // Enhanced heading styles
                h1: ({ children, ...props }) => (
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-6 border-b-2 border-blue-500/30 pb-3" {...props}>
                    {children}
                  </h1>
                ),
                h2: ({ children, ...props }) => (
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4 border-l-4 border-blue-500 pl-4" {...props}>
                    {children}
                  </h2>
                ),
                h3: ({ children, ...props }) => (
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-3" {...props}>
                    {children}
                  </h3>
                ),
                h4: ({ children, ...props }) => (
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-4 mb-2" {...props}>
                    {children}
                  </h4>
                ),
                h5: ({ children, ...props }) => (
                  <h5 className="text-base font-semibold text-gray-900 dark:text-gray-100 mt-4 mb-2" {...props}>
                    {children}
                  </h5>
                ),
                h6: ({ children, ...props }) => (
                  <h6 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-4 mb-2" {...props}>
                    {children}
                  </h6>
                ),
                // Enhanced list styles
                ul: ({ children, ...props }) => (
                  <ul className="list-disc list-inside space-y-2 my-4 text-gray-700 dark:text-gray-300" {...props}>
                    {children}
                  </ul>
                ),
                ol: ({ children, ...props }) => (
                  <ol className="list-decimal list-inside space-y-2 my-4 text-gray-700 dark:text-gray-300" {...props}>
                    {children}
                  </ol>
                ),
                li: ({ children, ...props }) => (
                  <li className="text-gray-700 dark:text-gray-300 leading-relaxed" {...props}>
                    {children}
                  </li>
                ),
                // Enhanced paragraph styles
                p: ({ children, ...props }) => (
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed my-4" {...props}>
                    {children}
                  </p>
                ),
                // Fixed image component with proper path handling
                img: ({ src, alt, ...props }) => {
                  const fixedSrc = src ? fixImagePath(src) : '';
                  return (
                    <div className="my-8">
                      <img
                        src={fixedSrc}
                        alt={alt}
                        className="w-full rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                        loading="lazy"
                        onError={(e) => {
                          console.error('Image failed to load:', fixedSrc);
                          // Optionally set a fallback image or hide the image
                          e.currentTarget.style.display = 'none';
                        }}
                        {...props}
                      />
                      {alt && (
                        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
                          {alt}
                        </p>
                      )}
                    </div>
                  );
                },
                // Custom video component
                video: ({ src, ...props }) => (
                  <div className="my-8">
                    <video
                      src={src}
                      controls
                      className="w-full rounded-lg shadow-lg"
                      {...props}
                    />
                  </div>
                ),
                // Custom link component
                a: ({ href, children, ...props }) => (
                  <a
                    href={href}
                    target={href?.startsWith('http') ? '_blank' : undefined}
                    rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline decoration-blue-500/30 hover:decoration-blue-500/60 transition-colors duration-200"
                    {...props}
                  >
                    {children}
                  </a>
                ),
                // Enhanced code block with copy functionality and language display
                pre: ({ children, ...props }) => {
                  // Extract the code element and its content
                  const codeElement = React.Children.toArray(children).find(
                    (child): child is React.ReactElement => 
                      React.isValidElement(child) && child.type === 'code'
                  );
                  
                  if (!codeElement) {
                    return <pre {...props}>{children}</pre>;
                  }

                  const className = codeElement.props?.className || '';
                  const language = extractLanguageFromClassName(className);
                  const displayLanguage = getLanguageDisplayName(language);
                  const codeId = Math.random().toString(36).substr(2, 9);
                  
                  // Extract the actual code content
                  const codeContent = extractTextFromChildren(codeElement.props.children);
                  
                  return (
                    <div className="relative my-6 group">
                      {/* Language label and copy button header */}
                      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 rounded-t-lg border-b border-gray-600">
                        <span className="text-xs font-medium text-gray-300 uppercase tracking-wide">
                          {displayLanguage || 'CODE'}
                        </span>
                        <button
                          onClick={() => copyToClipboard(codeContent, codeId)}
                          className="flex items-center space-x-1 px-3 py-1.5 rounded-md bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white transition-all duration-200 text-xs font-medium border border-gray-600"
                          title="Copy code"
                        >
                          {copiedCode === codeId ? (
                            <>
                              <Check className="w-3 h-3" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                      <pre
                        className="bg-gray-900 rounded-b-lg p-4 overflow-x-auto border border-gray-700 text-sm m-0"
                        {...props}
                      >
                        <code className="text-gray-100">
                          {codeElement.props.children}
                        </code>
                      </pre>
                    </div>
                  );
                },
                // Custom inline code styling
                code: ({ children, className, ...props }) => {
                  const isInline = !className;
                  return isInline ? (
                    <code
                      className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800 dark:text-gray-200"
                      {...props}
                    >
                      {children}
                    </code>
                  ) : (
                    <code className={`${className} text-gray-100`} {...props}>
                      {children}
                    </code>
                  );
                },
                // Custom blockquote styling
                blockquote: ({ children, ...props }) => (
                  <blockquote
                    className="border-l-4 border-blue-500 pl-6 my-6 italic text-gray-700 dark:text-gray-300 bg-blue-50/50 dark:bg-blue-900/20 py-4 rounded-r-lg"
                    {...props}
                  >
                    {children}
                  </blockquote>
                ),
                // Custom table styling
                table: ({ children, ...props }) => (
                  <div className="overflow-x-auto my-6">
                    <table
                      className="min-w-full border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden"
                      {...props}
                    >
                      {children}
                    </table>
                  </div>
                ),
                th: ({ children, ...props }) => (
                  <th
                    className="bg-gray-100 dark:bg-gray-700 px-4 py-2 text-left font-semibold border-b border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                    {...props}
                  >
                    {children}
                  </th>
                ),
                td: ({ children, ...props }) => (
                  <td
                    className="px-4 py-2 border-b border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                    {...props}
                  >
                    {children}
                  </td>
                ),
                // Enhanced strong/bold text
                strong: ({ children, ...props }) => (
                  <strong className="font-bold text-gray-900 dark:text-gray-100" {...props}>
                    {children}
                  </strong>
                ),
                // Enhanced emphasis/italic text
                em: ({ children, ...props }) => (
                  <em className="italic text-gray-800 dark:text-gray-200" {...props}>
                    {children}
                  </em>
                ),
              }}
            >
              {blogPost.content}
            </ReactMarkdown>
          </div>
        </article>

        {/* Navigation */}
        <div className="mt-12 text-center">
          <button
            onClick={scrollToBlogSection}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg backdrop-blur-sm bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 hover:from-blue-500/30 hover:to-purple-600/30 transition-all duration-200 text-blue-600 dark:text-blue-400 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;