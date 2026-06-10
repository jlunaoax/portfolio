import { education } from "@/data/resume";

export default function Education() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
          Education
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm card-hover"
            >
              <span className="text-3xl mb-3 block">{edu.icon}</span>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {edu.degree}
              </h3>
              <p className="text-blue-600 font-medium text-sm">{edu.school}</p>
              <p className="text-slate-500 text-sm">{edu.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
