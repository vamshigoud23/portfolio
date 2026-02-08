"use client";

export default function Projects() {
  const projects = [
    {
      title: "Hybrid AutoEncoder Driven ML model for Performance monitoring in 5g cellular Networks",
      description: "Developed a Hybrid Autoencoder-Driven ML Model for proactive performance monitoring in 5G cellular networks. The system utilizes a Deep AutoEncoder for feature extraction and a Random Forest classifier for predicting dropped connections with high accuracy.Designed an interactive Tkinter-based GUI for network administrators to train models, load datasets, and make real-time predictions.The model demonstrated improved efficiency, reducing false detection rates and enhancing network reliability compared to traditional rule-based methods.",
      tags: ["Python","Tkinter", "Machine Learning", "AutoEncoder", "Random Forest","SQLite"],
      link: "#",
    },
    {
      title: "Courier Management System",
      description: "Engineered a courier management system that enhanced delivery accuracy by 25% , Integrated GPS Tracking for real-time updates and streamlined logistics operations reducing delivery time by 15%. Built an admin dashboard to manage orders, Customers, and delivery agents efficiently.",
      tags: ["Python", "Django","mysql","HTML","CSS","JavaScript",],
      link: "#",
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization platform with interactive charts and reporting features",
      tags: ["React", "D3.js", "Node.js"],
      link: "#",
    },
    {
      title: "Social Media App",
      description: "Mobile-first social platform with real-time messaging and media sharing",
      tags: ["React Native", "Node.js", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Portfolio CMS",
      description: "Content management system for portfolio websites with drag-and-drop builder",
      tags: ["Next.js", "Prisma", "Tailwind"],
      link: "#",
    },
    {
      title: "Weather Forecast App",
      description: "Real-time weather application with 7-day forecasts and location tracking",
      tags: ["React", "OpenWeather API", "Charts.js"],
      link: "#",
    },
  ];

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
              <a href="/projects" className="text-sm font-medium text-blue-500">Projects</a>
              <a href="/contact" className="text-sm font-medium hover:text-blue-500 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Projects Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">My Projects</h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            A collection of projects that showcase my skills and passion for web development
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-zinc-50 dark:bg-zinc-900 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105 animate-fadeIn cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-40 sm:h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all"></div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white dark:bg-zinc-800 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    View Project
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
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
