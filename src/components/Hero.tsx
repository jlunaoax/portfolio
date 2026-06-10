import { personalInfo, certifications } from "@/data/resume";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto text-center section-fade">
        <div className="mb-6">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            Open to opportunities in Europe 🇪🇺
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
          {personalInfo.name}
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-2">
          {personalInfo.title}
        </p>

        <p className="text-lg text-slate-500 mb-8 font-mono">
          {personalInfo.subtitle}
        </p>

        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          {personalInfo.summary}
        </p>

        {/* Certifications badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200"
            >
              <span className="text-xl">{cert.icon}</span>
              <div className="text-left">
                <p className="text-xs font-semibold text-slate-700">{cert.name}</p>
                <p className="text-xs text-slate-500">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="bg-slate-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-700 transition-colors"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="border-2 border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-medium hover:border-slate-500 transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
