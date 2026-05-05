'use client';

const resumeArchive = [
  {
    title: 'Current Resume',
    description: 'The latest tailored resume for the portfolio site.',
    href: '/resume.pdf',
    cta: 'Open current resume',
  },
  {
    title: 'Previous Resume',
    description: 'The older version kept for reference in the archive.',
    href: '/resumes/legacy-resume.pdf',
    cta: 'Open archived resume',
  },
];

export default function ResumesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <p className="text-blue-500 dark:text-blue-400 font-semibold uppercase tracking-[0.2em] text-sm mb-4">
              Resume Archive
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-slate-50">
              Resumes
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              The newest resume is featured on the home page. Older versions are preserved here for reference.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {resumeArchive.map((resume) => (
              <article
                key={resume.title}
                className="card border border-slate-200/80 dark:border-slate-700/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm"
              >
                <div className="space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                      {resume.title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300">
                      {resume.description}
                    </p>
                  </div>
                  <a
                    href={resume.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center justify-center"
                  >
                    {resume.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
