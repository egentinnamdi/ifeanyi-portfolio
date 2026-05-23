import { SectionHeader } from "@/components/SectionHeader";
import { FadeIn } from "@/components/FadeIn";
import { CERTS } from "@/lib/data";

export function CertsSection() {
  return (
    <div className="bg-bg2" id="certs">
      <div className="max-w-[1200px] mx-auto">
        <FadeIn>
          <SectionHeader num="04" title="Certifications & Training" />
        </FadeIn>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {CERTS.map((cert, i) => (
            <FadeIn key={cert.id} delay={i * 80}>
              <div className="group flex flex-col gap-4 bg-surface border border-[rgba(0,255,224,0.12)] lg:p-9 px-5 py-7 transition-all duration-300 hover:border-[rgba(0,255,224,0.3)] hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(0,255,224,0.15)]">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[rgba(0,255,224,0.08)] border border-[rgba(0,255,224,0.2)] font-mono text-[10px] text-accent tracking-widest uppercase w-fit">
                  {cert.badge}
                </span>
                <h3 className="text-xl font-bold tracking-tight leading-[1.3] text-text1">
                  {cert.title}
                </h3>
                <p className="font-mono text-[13px] text-text2">{cert.org}</p>
                <p className="font-mono text-[12px] text-text3">{cert.date}</p>
                <p className="text-sm text-text2 leading-[1.7] pt-2 border-t border-[rgba(0,255,224,0.12)]">
                  {cert.description}
                </p>
                <p className="font-mono text-[10px] text-text3 tracking-[1px]">
                  {cert.id}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
