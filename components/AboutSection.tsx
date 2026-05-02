import { SectionHeader } from "@/components/SectionHeader";
import { FadeIn } from "@/components/FadeIn";
import { ABOUT_INFO } from "@/lib/data";
import { cn } from "@/lib/utils";

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-24 px-10 max-w-[1200px] mx-auto">
      <FadeIn>
        <SectionHeader num="01" title="About Me" />
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        {/* Text */}
        <FadeIn className="text-base text-text2 leading-[1.9] space-y-5">
          <p>
            Certified cybersecurity professional specializing in Web Application Security and
            Digital Forensics. Graduated with High Distinction (CSPA 4.91 — highest in Batch
            A2025) from the International Cybersecurity and Digital Forensics Academy (ICDFA),
            completing 89 skill units across rigorous hands-on training.
          </p>
          <p>
            Beyond the classroom, I build real-world tools and document practical projects —
            including a forensic data recovery tool published on GitHub. Driven by a hands-on
            approach to security: if I can't test it, I haven't learned it.
          </p>
          <p>
            Currently pursuing a B.Eng. in Electronics and Computer Engineering at the
            University of Nigeria, while simultaneously expanding into Python programming
            through GOMYCODE to strengthen security tooling and scripting capabilities.
          </p>
        </FadeIn>

        {/* Info card */}
        <FadeIn delay={80}>
          <div className="clip-corner-md bg-surface border border-[rgba(0,255,224,0.12)] p-8">
            <h4 className="font-mono text-[11px] text-accent tracking-widest uppercase mb-6">
              Quick Info
            </h4>
            {ABOUT_INFO.map((row) => (
              <div
                key={row.label}
                className="flex justify-between py-3 border-b border-[rgba(0,255,224,0.12)] last:border-b-0 text-sm"
              >
                <span className="font-mono text-[11px] text-text3 tracking-[1px] uppercase">
                  {row.label}
                </span>
                <span
                  className={cn(
                    "font-semibold text-right",
                    row.accent ? "text-accent" : "text-text1"
                  )}
                >
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
