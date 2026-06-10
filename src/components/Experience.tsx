import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
          Professional Experience
        </h2>
        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          Progressive career from IT management to senior fullstack development at enterprise scale.
        </p>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-sm card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                  <p className="text-blue-600 font-medium">
                    {job.company} · {job.location}
                  </p>
                </div>
                <span className="text-sm text-slate-500 font-mono mt-1 md:mt-0 whitespace-nowrap">
                  {job.period}
                </span>
              </div>

              <ul className="space-y-2 mb-4">
                {job.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                    <span className="text-blue-500 mt-1 shrink-0">▸</span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100">
                {job.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
