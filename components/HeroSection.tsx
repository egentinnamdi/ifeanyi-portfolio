import { HERO_STATS } from "@/lib/data";
import Image from "next/image";
import { FadeIn } from "./FadeIn";

export function HeroSection() {
  return (
    <div className="relative flex flex-col lg:flex-row gap-5 lg:gap-10 py-20 lg:py-0  z-10">
      <div className=" lg:w-2/4 grid bg-[radial-gradient(circle_at_center,#00ffe033_0%,transparent_70%)] place-items-center">
        <FadeIn className="lg:size-3/5 overflow-hidden size-5/6 [border-radius:30%_70%_70%_30%/30%_30%_70%_70%] lg:ml-24 ring-4 ring-offset-[#0099ff]/25 ring-offset-4 ring-[#00ffe080]">
          <Image
            src="/images/profile.jpeg"
            alt="profile"
            width={500}
            height={500}
            className="size-full object-cover   "
          />
        </FadeIn>
      </div>
      <div className="relative lg:min-h-screen px-10 flex items-center lg:pt-[120px] lg:pb-20 max-w-[1200px] mx-auto">
        <div className="max-w-[720px]">
          {/* Tag */}
          <div className="flex items-center gap-3 font-mono text-[11px] text-accent tracking-[3px] uppercase mb-6">
            <span className="w-10 h-px bg-accent" />
            Cybersecurity Professional
          </div>

          {/* Name */}
          <h2 className="text-[clamp(42px,4vw,80px)] text-2xl font-extrabold leading-[1.05] tracking-[-2px] mb-4 text-text1">
            Ifeanyi
            <br />
            <span className="gradient-text">David Egenti</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg text-text2 font-normal mb-8">
            Certified in Web Application Security &amp; Digital Forensics
          </p>

          {/* Description */}
          <p className="lg:text-base text-text2 leading-[1.8] text-sm mb-12 max-w-[580px]">
            Hands-on associate cybersecurity professional (ICDFA) specializing
            in web application security testing, digital forensics
            investigation, and security tooling. Graduated High Distinction from
            ICDFA — highest CSPA in Batch A2025.
          </p>

          {/* Stats */}
          <div className="flex gap-12 mb-12 flex-wrap">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <span className="font-mono text-[36px] font-bold text-accent leading-none">
                  {stat.value}
                </span>
                <span className="font-mono text-[11px] text-text3 tracking-[1px] uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="/cv.pdf"
              className="clip-corner-sm px-8 py-[14px] bg-accent text-bg font-mono text-[12px] font-bold tracking-[2px] uppercase transition-all duration-200 hover:bg-accent2 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,153,255,0.3)]"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="clip-corner-sm px-8 py-[14px] bg-transparent text-accent font-mono text-[12px] font-bold tracking-[2px] uppercase border border-accent transition-all duration-200 hover:bg-[rgba(0,255,224,0.08)] hover:-translate-y-0.5"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Decoration blob */}
        <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,153,255,0.08)_0%,transparent_70%)] pointer-events-none" />
      </div>
    </div>
  );
}
