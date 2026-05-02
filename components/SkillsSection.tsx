import { SectionHeader } from "@/components/SectionHeader";
import { FadeIn } from "@/components/FadeIn";
import { SKILLS } from "@/lib/data";

export function SkillsSection() {
  return (
    <div className="bg-bg2 py-24" id="skills">
      <div className="max-w-[1200px] mx-auto px-10">
        <FadeIn>
          <SectionHeader num="02" title="Skills & Competencies" />
        </FadeIn>

        <FadeIn delay={80}>
          <p className="text-base text-text2 leading-[1.8] mb-10 max-w-[700px]">
            Certified across 89 skill units with demonstrated proficiency in web application
            security testing, digital forensics, cloud security, mobile/IoT forensics, and
            AI-assisted investigations. Experienced in forensic data recovery, Bash automation
            scripting, and real-world threat simulation. Currently expanding into Python
            programming.
          </p>
        </FadeIn>

        <FadeIn delay={160}>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-2.5 px-[18px] py-2.5 bg-surface border border-[rgba(0,255,224,0.12)] font-mono text-[13px] text-text1 cursor-default transition-all duration-200 hover:border-accent hover:text-accent hover:bg-[rgba(0,255,224,0.05)] hover:-translate-y-0.5"
              >
                {skill.name}
                <span className="text-[11px] text-accent font-bold">{skill.score}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
