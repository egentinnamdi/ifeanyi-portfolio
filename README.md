# Ifeanyi David Egenti — Cybersecurity Portfolio

A production-ready Next.js 14 portfolio site built with TypeScript, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** (component primitives)
- **Lucide React** (icons)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
ifeanyi-portfolio/
├── app/
│   ├── globals.css        # Global styles, CSS variables, grid background
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx         # Fixed nav with active section tracking
│   ├── HeroSection.tsx    # Full-screen hero
│   ├── ObjectiveSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── CertsSection.tsx
│   ├── ExperienceSection.tsx
│   ├── EducationSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── FadeIn.tsx         # Intersection observer scroll animation wrapper
│   └── SectionHeader.tsx  # Reusable section header (num + title + line)
├── lib/
│   ├── data.ts            # All portfolio content (edit this to update content)
│   └── utils.ts           # cn() utility
└── tailwind.config.ts     # Custom colors, fonts, animations
```

## Customising Content

All text content lives in `lib/data.ts`. Edit that file to:
- Update stats, skills, projects, certifications, experience, education
- Add new projects to the `PROJECTS` array
- Update contact links in `CONTACT_ITEMS`

## Build for Production

```bash
npm run build
npm start
```

## Deploy

Deploy instantly on [Vercel](https://vercel.com) — just connect your GitHub repo.
