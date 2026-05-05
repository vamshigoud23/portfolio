'use client';

import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with Next.js and Stripe integration for seamless online shopping.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Stripe', 'MongoDB'],
    image: '🛍️',
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team collaboration features.',
    tech: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
    image: '✓',
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A beautiful weather application with real-time data, forecasts, and location-based features.',
    tech: ['React', 'TypeScript', 'API Integration', 'Chart.js'],
    image: '🌤️',
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'AI Chat Interface',
    description: 'An interactive chat interface powered by AI with natural language processing capabilities.',
    tech: ['Next.js', 'OpenAI API', 'React', 'Tailwind CSS'],
    image: '💬',
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Real Estate Listing',
    description: 'A modern real estate platform with advanced filtering, virtual tours, and property management features.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Mapbox'],
    image: '🏠',
    link: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Social Media Analytics',
    description: 'A comprehensive analytics dashboard for social media performance tracking and insights.',
    tech: ['React', 'TypeScript', 'D3.js', 'Express'],
    image: '📊',
    link: '#',
    github: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 text-lg mt-6">
            Here are some of my recent projects showcasing my skills and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card group"
            >
              {/* Project Image Placeholder */}
              <div className="mb-6 h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-6xl font-bold group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                {project.image}
              </div>

              {/* Project Content */}
              <h3 className="text-xl md:text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.link}
                  className="flex items-center gap-2 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 font-semibold"
                >
                  <span>View</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 font-semibold"
                >
                  <span>Code</span>
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
