import { SectionHeader } from "@/components/SectionHeader";
import { FadeIn } from "@/components/FadeIn";

export function ObjectiveSection() {
  return (
    <div className="bg-bg2 py-24" id="objective">
      <div className="max-w-[1200px] mx-auto px-10">
        <FadeIn>
          <SectionHeader num="00" title="Career Objective" />
        </FadeIn>
        <FadeIn delay={80}>
          <p className="text-lg text-text2 leading-[1.9] border-l-[3px] border-accent pl-7 max-w-[800px]">
            To secure a cybersecurity role where I can apply my certified expertise in web
            application security and digital forensics to protect organizational assets and
            investigate threats. With a CSPA of 4.91 and a proven ability to build real-world
            security tools, I bring both academic excellence and hands-on execution to the
            table. My goal is to grow into a well-rounded security professional — one who can
            assess vulnerabilities, respond to incidents, and think like an attacker.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
