import { SectionHeader } from "@/components/SectionHeader";
import { FadeIn } from "@/components/FadeIn";
import { CONTACT_ITEMS } from "@/lib/data";

export function ContactSection() {
  return (
    <section id="contact" className="relative z-10 max-w-[1200px] mx-auto">
      <FadeIn>
        <SectionHeader num="07" title="Get In Touch" />
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        {/* Left: intro + banner */}
        <FadeIn>
          <p className="text-base text-text2 leading-[1.8] mb-10">
            Open to cybersecurity roles, collaborations, and opportunities.
            Whether you're a recruiter, fellow practitioner, or someone who
            wants to talk security — reach out.
          </p>

          <div className="clip-corner-md bg-gradient-to-br from-[rgba(0,255,224,0.08)] to-[rgba(0,153,255,0.08)] border border-[rgba(0,255,224,0.12)] p-10">
            <h3 className="text-[28px] font-extrabold tracking-tight mb-2 text-text1">
              High Distinction
              <br />
              <span className="gradient-text">
                CSPA 4.91 · #1 in Batch A2025
              </span>
            </h3>
            <p className="text-sm text-text2 leading-[1.6] mt-3">
              Certified in Web Application Security & Digital Forensics · ICDFA
              · April 2026
            </p>
          </div>
        </FadeIn>

        {/* Right: contact links */}
        <FadeIn delay={80}>
          <div className="flex flex-col gap-5">
            {CONTACT_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-4 px-6 py-5 bg-surface border border-[rgba(0,255,224,0.12)] text-decoration-none transition-all duration-200 hover:border-accent hover:bg-[rgba(0,255,224,0.05)] hover:translate-x-1 no-underline"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-[rgba(0,255,224,0.08)] border border-[rgba(0,255,224,0.12)] flex-shrink-0 text-base">
                  {item.icon}
                </div>
                <div>
                  <div className="font-mono text-[10px] text-text3 tracking-widest uppercase mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-xs lg:text-sm text-text1  font-semibold">
                    {item.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
