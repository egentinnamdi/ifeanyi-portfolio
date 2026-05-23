import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ObjectiveSection } from "@/components/ObjectiveSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CertsSection } from "@/components/CertsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className=" space-y-16 px-5 lg:px-10 lg:space-y-24 overflow-hidden">
        <HeroSection />
        <ObjectiveSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
