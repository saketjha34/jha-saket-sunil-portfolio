# Jha Saket Sunil - Portfolio

A modern, responsive portfolio website showcasing my work as an AI Engineer and Backend Developer. Built with React, TypeScript, and Tailwind CSS, featuring a beautiful glassmorphism design with smooth animations and transitions.

## 🚀 Live Demo

[View Portfolio](https://your-portfolio-url.com) <!-- Replace with your actual URL -->

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Blog System](#blog-system)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎯 About

This portfolio website represents my journey as a B.Tech Civil Engineering student at NIT Karnataka with a minor in Information Technology. It showcases my expertise in:

- **AI Engineering**: Machine Learning, Deep Learning, Computer Vision
- **Backend Development**: FastAPI, PostgreSQL, Distributed Systems
- **Full-Stack Development**: React, TypeScript, Modern Web Technologies

## ✨ Features

### 🎨 Design & UI
- **Glassmorphism Design**: Modern glass-like effects with backdrop blur
- **Dark/Light Mode**: Automatic theme switching with system preference detection
- **Responsive Layout**: Optimized for all device sizes (mobile, tablet, desktop)
- **Smooth Animations**: Page transitions, section animations, and micro-interactions
- **Beautiful Typography**: Gradient text effects and carefully chosen fonts

### 🧭 Navigation
- **Smooth Scrolling**: Seamless navigation between sections
- **Active Section Highlighting**: Dynamic navbar highlighting based on scroll position
- **Mobile-Friendly Menu**: Collapsible navigation for mobile devices
- **Page Transitions**: Smooth transitions between pages

### 📱 Sections
- **Hero Section**: Eye-catching introduction with contact cards
- **About**: Personal background, education, and achievements
- **Projects**: Featured projects with detailed descriptions and tech stacks
- **Experience**: Professional work experience with highlights
- **Tech Stack**: Visual representation of technologies and skills
- **Blog**: Technical articles and insights
- **Footer**: Contact information and social links

### 📝 Blog System
- **Markdown Support**: Write blog posts in Markdown format
- **Syntax Highlighting**: Code blocks with language-specific highlighting
- **Math Equations**: LaTeX math rendering with KaTeX
- **Copy Code Feature**: One-click code copying functionality
- **Responsive Design**: Mobile-optimized reading experience
- **SEO Friendly**: Proper meta tags and structured content

## 🛠 Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server

### Routing & Navigation
- **React Router DOM** - Client-side routing
- **Smooth Scrolling** - Custom scroll behavior

### Blog & Content
- **React Markdown** - Markdown rendering
- **Remark GFM** - GitHub Flavored Markdown support
- **Remark Math** - Mathematical expressions
- **Rehype KaTeX** - LaTeX math rendering
- **Rehype Highlight** - Syntax highlighting for code blocks
- **Rehype Raw** - Raw HTML support in markdown

### Icons & Assets
- **Lucide React** - Beautiful, customizable icons
- **React Icons** - Additional icon libraries (for tech stack)

### Development Tools
- **ESLint** - Code linting and quality
- **TypeScript ESLint** - TypeScript-specific linting
- **PostCSS** - CSS processing
- **Autoprefixer** - Automatic vendor prefixes

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/saketjha34/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── blogContent/           # Blog posts in Markdown format
│   │   ├── 1.md              # Blog post files
│   │   ├── 2.md
│   │   └── 3.md
│   ├── logos/                 # Company/project logos
│   └── vite.svg              # Vite logo
├── src/
│   ├── components/           # React components
│   │   ├── About.tsx         # About section
│   │   ├── AnimatedSection.tsx # Animation wrapper
│   │   ├── Blog.tsx          # Blog listing
│   │   ├── BlogPost.tsx      # Individual blog post
│   │   ├── Experience.tsx    # Work experience
│   │   ├── Footer.tsx        # Footer component
│   │   ├── Hero.tsx          # Hero section
│   │   ├── Navbar.tsx        # Navigation bar
│   │   ├── PageTransition.tsx # Page transitions
│   │   ├── Projects.tsx      # Projects showcase
│   │   ├── ScrollToTop.tsx   # Scroll to top button
│   │   ├── SectionTransition.tsx # Section animations
│   │   └── TechStack.tsx     # Technology stack
│   ├── hooks/
│   │   └── useTheme.tsx      # Theme management hook
│   ├── types/
│   │   └── index.ts          # TypeScript type definitions
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # App entry point
│   └── index.css             # Global styles
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── vite.config.ts            # Vite configuration
```

## 📝 Blog System

### Adding New Blog Posts

1. **Create a new Markdown file** in `public/blogContent/`
   ```bash
   # Example: public/blogContent/4.md
   ```

2. **Add metadata at the top** of your Markdown file:
   ```markdown
   <!-- date: 2024-12-20 -->
   <!-- readTime: 15 min read -->
   <!-- tags: React, TypeScript, Web Development -->
   
   # Your Blog Post Title
   
   Your content here...
   ```

3. **Update the blog metadata** in `src/components/BlogPost.tsx`:
   ```typescript
   const blogPostMetadata: { [key: string]: Omit<BlogPostData, 'id' | 'content'> } = {
     '4': {
       title: 'Your New Blog Post Title',
       date: '2024-12-20',
       readTime: '15 min read',
       tags: ['React', 'TypeScript', 'Web Development']
     }
   };
   ```

4. **Add the post to the blog listing** in `src/components/Blog.tsx`:
   ```typescript
   const blogPosts: BlogPost[] = [
     {
       id: '4',
       title: 'Your New Blog Post Title',
       excerpt: 'Brief description of your post...',
       date: '2024-12-20',
       readTime: '15 min read',
       tags: ['React', 'TypeScript', 'Web Development']
     }
   ];
   ```

### Blog Features

- **Markdown Support**: Full GitHub Flavored Markdown
- **Code Highlighting**: Automatic syntax highlighting for 20+ languages
- **Math Equations**: LaTeX support with KaTeX
- **Copy Code**: One-click copying of code blocks
- **Responsive Images**: Automatic image optimization
- **SEO Optimized**: Proper meta tags and structured data

### Supported Markdown Features

- Headers (H1-H6)
- Lists (ordered and unordered)
- Code blocks with syntax highlighting
- Inline code
- Tables
- Blockquotes
- Links and images
- Mathematical expressions
- HTML elements (when needed)

## 🎨 Customization

### Updating Personal Information

1. **Hero Section**: Edit `src/components/Hero.tsx`
2. **About Section**: Update `src/components/About.tsx`
3. **Experience**: Modify `src/components/Experience.tsx`
4. **Projects**: Update project data in `src/components/Projects.tsx`
5. **Tech Stack**: Add/remove technologies in `src/components/TechStack.tsx`

### Styling and Themes

- **Colors**: Modify `tailwind.config.js` for custom color schemes
- **Fonts**: Update font imports in `index.html`
- **Animations**: Customize animations in `tailwind.config.js`
- **Layout**: Adjust component layouts in respective files

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add to `src/App.tsx`
3. Update navigation in `src/components/Navbar.tsx`
4. Add smooth scrolling support

## 🚀 Deployment

### Netlify (Recommended)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel --prod
   ```

### GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script** to `package.json`:
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Build and deploy**
   ```bash
   npm run build
   npm run deploy
   ```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines

1. Follow the existing code style
2. Use TypeScript for type safety
3. Write meaningful commit messages
4. Test your changes thoroughly
5. Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: saketjha0324@gmail.com
- **LinkedIn**: [linkedin.com/in/saketjha34](https://linkedin.com/in/saketjha34)
- **GitHub**: [github.com/saketjha34](https://github.com/saketjha34)
- **Location**: Mumbai, India

---

**Built with ❤️ by Jha Saket Sunil**

*This portfolio showcases my journey in AI engineering and backend development. Feel free to explore the code and reach out if you have any questions!*