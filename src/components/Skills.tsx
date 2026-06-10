import { skills } from "@/data/resume";

const skillCategories = [
  { key: "backend" as const, label: "Backend", icon: "⚙️" },
  { key: "frontend" as const, label: "Frontend", icon: "🎨" },
  { key: "cloud" as const, label: "Cloud & DevOps", icon: "☁️" },
  { key: "databases" as const, label: "Databases", icon: "🗄️" },
  { key: "practices" as const, label: "Practices", icon: "📋" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
          Technical Skills
        </h2>
        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
          Focused on modern enterprise technologies for building scalable, maintainable applications.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.key}
              className="bg-slate-50 rounded-xl p-6 border border-slate-100 card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-slate-800">
                  {category.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills[category.key].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white text-slate-700 text-sm rounded-md border border-slate-200"
                  >
                    {skill}
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
