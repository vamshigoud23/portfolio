"use client";

export default function About() {
  const techStack = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "Node.js", icon: "🟢" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Git", icon: "📦" },
    { name: "Python", icon: "🐍" },
  ];

  const stats = [
    { label: "Projects Completed", value: "25+" },
    { label: "Happy Clients", value: "15+" },
    { label: "Lines of Code", value: "50K+" },
    { label: "Years Experience", value: "3+" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-lg border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="text-xl font-bold hover:text-blue-500 transition-colors">VAMSHI</a>
            <div className="flex space-x-8">
              <a href="/" className="text-sm font-medium hover:text-blue-500 transition-colors">Home</a>
              <a href="/about" className="text-sm font-medium text-blue-500">About</a>
              <a href="/projects" className="text-sm font-medium hover:text-blue-500 transition-colors">Projects</a>
              <a href="/contact" className="text-sm font-medium hover:text-blue-500 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* About Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">About Me</h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Full Stack Developer and Designer with expertise in building modern web applications. 
            I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4">Tech Stack</h2>
          <p className="text-center text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 mb-10 sm:mb-12 max-w-2xl mx-auto">
            Technologies I work with on a daily basis
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="bg-white dark:bg-zinc-800 p-5 sm:p-6 rounded-xl sm:rounded-2xl text-center hover:shadow-xl transition-all hover:scale-105 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{tech.icon}</div>
                <div className="font-medium text-sm sm:text-base">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12">By The Numbers</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fadeIn p-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400">{stat.label}</div>
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
