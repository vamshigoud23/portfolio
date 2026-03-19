"use client";

import { useParams, notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "../projectsData";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);

  if (!project) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-lg border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center gap-2 group">
              <img src="/logo.png" alt="VJ Logo" className="h-12 w-auto transition-transform group-hover:scale-110" />
            </a>
            <div className="flex space-x-8">
              <a href="/" className="text-sm font-medium hover:text-blue-500 transition-colors">Home</a>
              <a href="/about" className="text-sm font-medium hover:text-blue-500 transition-colors">About</a>
              <a href="/projects" className="text-sm font-medium hover:text-blue-500 transition-colors">Projects</a>
              <a href="/contact" className="text-sm font-medium hover:text-blue-500 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <a 
            href="/projects" 
            className="inline-flex items-center text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-blue-500 transition-colors mb-8"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </a>
        </div>
      </div>

      {/* Project Header */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-zinc-100 dark:bg-zinc-900 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-12">
            {project.githubLink && project.githubLink !== "#" && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
            )}
            {project.liveLink && project.liveLink !== "#" && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Project Image/Banner */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 aspect-video shadow-2xl"></div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Full Description */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">About This Project</h2>
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Key Features</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg"
                  >
                    <svg
                      className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Challenges & Solutions</h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg border-l-4 border-yellow-500"
                  >
                    <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Learnings */}
          {project.learnings && project.learnings.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">What I Learned</h2>
              <div className="space-y-4">
                {project.learnings.map((learning, index) => (
                  <div
                    key={index}
                    className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg border-l-4 border-green-500"
                  >
                    <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
                      {learning}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Interested in Working Together?</h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
          >
            Get in Touch
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-lg sm:text-xl font-bold">VAMSHI</div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="/" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Home</a>
              <a href="/about" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">About</a>
              <a href="/projects" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Projects</a>
              <a href="/contact" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">Contact</a>
            </div>
            <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 text-center">
              © 2026 VAMSHI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
