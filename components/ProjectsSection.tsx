import { SectionHeader } from "@/components/SectionHeader";
import { FadeIn } from "@/components/FadeIn";
import { PROJECTS } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 py-24 px-10 max-w-[1200px] mx-auto">
      <FadeIn>
        <SectionHeader num="03" title="Projects" />
      </FadeIn>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {PROJECTS.map((project, i) => (
          <FadeIn key={project.num} delay={i * 80}>
            <div className="group relative clip-corner-lg bg-surface border border-[rgba(0,255,224,0.12)] p-10 transition-all duration-300 hover:border-[rgba(0,255,224,0.3)] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,255,224,0.15)] overflow-hidden">
              {/* Top gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-accent2 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="font-mono text-[11px] text-accent tracking-widest mb-4">
                {project.num}
              </div>
              <h3 className="text-[22px] font-bold tracking-tight mb-3 text-text1">
                {project.title}
              </h3>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-[rgba(0,153,255,0.1)] border border-[rgba(0,153,255,0.2)] font-mono text-[10px] text-accent2 tracking-[1px]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-sm text-text2 leading-[1.8] mb-5">{project.description}</p>

              {/* Outcome */}
              <div className="px-4 py-4 bg-[rgba(0,255,224,0.04)] border-l-2 border-accent text-sm text-text2 leading-[1.7] mb-6">
                <strong className="text-accent font-mono text-[10px] tracking-widest uppercase block mb-1.5">
                  Outcomes &amp; Achievements
                </strong>
                {project.outcome}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] text-accent tracking-[1px] uppercase transition-[gap] duration-200 hover:gap-3.5"
              >
                {project.linkLabel}
              </a>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
