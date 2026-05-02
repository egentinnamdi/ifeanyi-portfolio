import { SectionHeader } from "@/components/SectionHeader";
import { FadeIn } from "@/components/FadeIn";
import { EDUCATION } from "@/lib/data";

export function EducationSection() {
  return (
    <div className="bg-bg2 py-24" id="education">
      <div className="max-w-[1200px] mx-auto px-10">
        <FadeIn>
          <SectionHeader num="06" title="Education" />
        </FadeIn>

        <div className="relative pl-8">
          {/* Timeline line */}
          <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-accent via-accent2 to-transparent" />

          {EDUCATION.map((edu, i) => (
            <FadeIn key={edu.degree} delay={i * 80}>
              <div className="relative pb-12 pl-8">
                {/* Dot */}
                <div className="absolute left-[-27px] top-2 w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(0,255,224,0.8)]" />

                <div className="font-mono text-[11px] text-accent2 tracking-widest mb-2">
                  {edu.period}
                </div>
                <div className="text-xl font-bold tracking-tight mb-1 text-text1">
                  {edu.degree}
                </div>
                <div className="text-sm text-accent font-semibold mb-1">{edu.field}</div>
                <div className="font-mono text-[13px] text-text2 mb-3">{edu.institution}</div>
                <p className="text-sm text-text2 leading-[1.7]">{edu.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
