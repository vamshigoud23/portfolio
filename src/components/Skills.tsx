'use client';

const skillCategories = [
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'JavaScript'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase', 'REST APIs'],
  },
  {
    name: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'Vercel', 'Netlify'],
  },
  {
    name: 'Soft Skills',
    skills: ['Problem Solving', 'Communication', 'Team Collaboration', 'Project Management', 'Attention to Detail', 'Continuous Learning'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.name} className="card">
              <h3 className="text-xl font-bold mb-6 text-blue-500 dark:text-blue-400">
                {category.name}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Bars */}
        <div className="mt-16 space-y-8">
          <h3 className="text-2xl font-bold text-center mb-12">Proficiency Levels</h3>
          
          {[
            { name: 'React & Next.js', level: 95 },
            { name: 'TypeScript', level: 90 },
            { name: 'Tailwind CSS', level: 95 },
            { name: 'Node.js & Backend', level: 85 },
            { name: 'Database Design', level: 80 },
            { name: 'Web Performance', level: 88 },
          ].map((proficiency) => (
            <div key={proficiency.name}>
              <div className="flex justify-between mb-2">
                <h4 className="font-semibold text-slate-900 dark:text-slate-50">
                  {proficiency.name}
                </h4>
                <span className="text-blue-500 font-bold">{proficiency.level}%</span>
              </div>
              <div className="w-full h-3 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500"
                  style={{ width: `${proficiency.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
