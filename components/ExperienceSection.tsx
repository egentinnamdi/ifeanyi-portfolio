import { SectionHeader } from "@/components/SectionHeader";
import { FadeIn } from "@/components/FadeIn";
import { EXPERIENCES } from "@/lib/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative z-10 py-24 px-10 max-w-[1200px] mx-auto">
      <FadeIn>
        <SectionHeader num="05" title="Work Experience" />
      </FadeIn>

      <div className="flex flex-col gap-8">
        {EXPERIENCES.map((exp, i) => (
          <FadeIn key={exp.role} delay={i * 80}>
            <div className="relative clip-corner-both bg-surface border border-[rgba(0,255,224,0.12)] p-10 overflow-hidden">
              {/* Left accent bar */}
              <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-accent to-accent2" />

              <div className="flex justify-between items-start flex-wrap gap-3 mb-4">
                <div>
                  <div className="text-2xl font-bold tracking-tight text-text1">{exp.role}</div>
                  <div className="text-[15px] text-accent2 font-semibold mt-1">{exp.org}</div>
                  <div className="font-mono text-[13px] text-text3 mt-0.5">{exp.sub}</div>
                </div>
                <span className="font-mono text-[11px] text-accent px-3.5 py-1.5 border border-[rgba(0,255,224,0.12)] whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <p className="text-[15px] text-text2 leading-[1.8] mb-6">{exp.description}</p>

              <div className="flex flex-wrap gap-2.5">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 bg-[rgba(0,255,224,0.06)] border border-[rgba(0,255,224,0.12)] font-mono text-[10px] text-accent tracking-[1px] uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {exp.link && (
                <div className="mt-6">
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-[11px] text-accent tracking-[1px] uppercase transition-[gap] duration-200 hover:gap-3.5"
                  >
                    {exp.linkLabel}
                  </a>
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
