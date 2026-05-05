'use client';

export default function About() {
  return (
    <section id="about" className="bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image placeholder */}
          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-5xl font-bold shadow-lg">
              Photo
            </div>
          </div>

          {/* Right - About content */}
          <div className="space-y-6">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              I&apos;m a passionate full-stack developer with a strong foundation in modern web technologies. With expertise in React, Next.js, TypeScript, and Node.js, I craft responsive and user-friendly web applications.
            </p>

            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              I believe in writing clean, maintainable code and following best practices. My goal is to create digital solutions that not only look great but also provide exceptional user experiences.
            </p>

            <div className="space-y-4 pt-4">
              <h3 className="text-2xl font-semibold">What I Offer:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold mt-1">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Full-stack web development with modern technologies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold mt-1">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Responsive, mobile-first design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold mt-1">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">Performance optimization and SEO</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold mt-1">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">UI/UX focused development</span>
                </li>
              </ul>
            </div>

            <a href="#contact" className="btn-primary inline-block mt-8">
              Let&apos;s Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
