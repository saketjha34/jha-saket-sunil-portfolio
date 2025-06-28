import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import { ArrowLeft, Calendar, Clock, Tag, Share2, Copy, Check } from 'lucide-react';
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
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const loadBlogPost = async () => {
      if (!id) {
        setError('Blog post ID not found');
        setLoading(false);
        return;
      }

      try {
        // Load markdown content
        const response = await fetch(`/src/blogContent/${id}.md`);
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
        let contentStart = 0;

        // Look for metadata in the first few lines
        if (lines[0]?.startsWith('# ')) {
          title = lines[0].substring(2).trim();
          contentStart = 1;
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

  const handleShare = async () => {
    const url = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: blogPost?.title,
          url: url,
        });
      } catch (err) {
        // Fallback to copy
        copyToClipboard(url);
      }
    } else {
      copyToClipboard(url);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
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
            onClick={() => navigate('/')}
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
              <button
                onClick={handleShare}
                className="flex items-center space-x-2 px-3 py-1 rounded-lg backdrop-blur-sm bg-white/20 dark:bg-gray-800/20 border border-white/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all duration-200"
              >
                {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                <span>{copied ? 'Copied!' : 'Share'}</span>
              </button>
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
                // Custom image component with responsive styling
                img: ({ src, alt, ...props }) => (
                  <div className="my-8">
                    <img
                      src={src}
                      alt={alt}
                      className="w-full rounded-lg shadow-lg"
                      loading="lazy"
                      {...props}
                    />
                    {alt && (
                      <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
                        {alt}
                      </p>
                    )}
                  </div>
                ),
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
                // Custom code block styling
                pre: ({ children, ...props }) => (
                  <div className="relative my-6">
                    <pre
                      className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto border border-gray-700"
                      {...props}
                    >
                      {children}
                    </pre>
                  </div>
                ),
                // Custom inline code styling
                code: ({ children, className, ...props }) => {
                  const isInline = !className;
                  return isInline ? (
                    <code
                      className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm font-mono"
                      {...props}
                    >
                      {children}
                    </code>
                  ) : (
                    <code className={className} {...props}>
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
                    className="bg-gray-100 dark:bg-gray-700 px-4 py-2 text-left font-semibold border-b border-gray-300 dark:border-gray-600"
                    {...props}
                  >
                    {children}
                  </th>
                ),
                td: ({ children, ...props }) => (
                  <td
                    className="px-4 py-2 border-b border-gray-200 dark:border-gray-700"
                    {...props}
                  >
                    {children}
                  </td>
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
            onClick={() => navigate('/')}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg backdrop-blur-sm bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 hover:from-blue-500/30 hover:to-purple-600/30 transition-all duration-200 text-blue-600 dark:text-blue-400 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;