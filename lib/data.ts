export const NAV_LINKS = [
  { label: "Objective", href: "#objective" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certs", href: "#certs" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO_STATS = [
  { value: "4.91", label: "CSPA Score" },
  { value: "#1", label: "Cohort Rank" },
  { value: "89", label: "Skill Units" },
  { value: "15", label: "Courses — A Grade" },
];

export const ABOUT_INFO = [
  { label: "Program", value: "Web App Security & Digital Forensics" },
  { label: "Institution", value: "ICDFA" },
  { label: "Student ID", value: "2025/CFP/6702" },
  { label: "Cohort", value: "Batch A2025" },
  { label: "Final Grade", value: "High Distinction", accent: true },
  { label: "CSPA", value: "4.91 / 5.00", accent: true },
  { label: "Location", value: "Lagos, Nigeria" },
];

export interface Skill {
  name: string;
  score?: string;
}

export const SKILLS: Skill[] = [
  { name: "Introduction to Web App Security", score: "95%" },
  { name: "Web App Security Fundamentals", score: "97%" },
  { name: "Advanced Web App Security", score: "99%" },
  { name: "Web App Security CTF", score: "80%" },
  { name: "Cloud Security & Data Protection", score: "95%" },
  { name: "Capstone — Web App Security", score: "100%" },
  { name: "Basic Computer Skills for DFIR", score: "100%" },
  { name: "Basic Networking for DFIR", score: "100%" },
  { name: "Computer & Digital Forensics", score: "100%" },
  { name: "Computer Forensics Case Study", score: "90%" },
  { name: "Mobile/IoT Forensics Case Study", score: "100%" },
  { name: "AI for Forensics", score: "90%" },
  { name: "Capstone — Digital Forensics", score: "95%" },
  { name: "Community Dev & Social Impact I", score: "100%" },
  { name: "Community Dev & Social Impact II", score: "100%" },
  { name: "Bash Scripting & Automation", score: "●" },
  { name: "Kali Linux / VirtualBox", score: "●" },
  { name: "Python Programming", score: "In Progress" },
  { name: "WAF evasion" },
  { name: "Penetration testing" },
  { name: "Vulnerability assessment" },
  { name: "SQLi" },
];

export interface Project {
  num: string;
  title: string;
  tech: string[];
  description: string;
  outcome: string;
  link?: string;
  linkLabel?: string;
}

export const PROJECTS: Project[] = [
  {
    num: "PROJECT // 001",
    title: "Storage Drive Forensic Recovery Tool v2.2",
    tech: [
      "Kali Linux",
      "Bash Scripting",
      "PhotoRec",
      "Foremost",
      "TestDisk",
      "VirtualBox",
    ],
    description:
      "Developed and deployed an automated forensic recovery tool to recover lost data from a reformatted USB flash drive. The project involved mounting the drive in a Kali Linux virtual environment, performing file carving using Foremost and PhotoRec, and recovering both photos and large MOV video files. The entire workflow was packaged into a reusable Bash automation script to streamline future forensic recovery operations.",
    outcome:
      "Successfully recovered photos and large MOV video files from a fully reformatted storage device. Published as open-source on GitHub, demonstrating real-world forensic investigation capability beyond coursework.",
    link: "https://github.com/IFEANYI-EGENTI/Recovery_Tool_v2.2",
    linkLabel: "View on GitHub →",
  },
  {
    num: "PROJECT // 002",
    title: "Web Application Security CTF Challenge — CTF205",
    tech: ["SQLMap", "Burp Suite", "curl", "Kali Linux", "Base64 Decoding"],
    description:
      "Conducted a penetration test against a WAF-protected government login portal (pension.nasarawastate.gov.ng) as part of a structured CTF assessment. Identified a time-based blind SQL injection vulnerability in the username parameter through manual reconnaissance and payload crafting. Pivoted from automated SQLMap attacks — blocked by WAF/IPS returning HTTP 406/508 — to manual injection via Burp Suite Repeater, successfully confirming the backend database name and DBMS (MySQL/MariaDB). Decoded Base64-encoded HTML hints to capture the first flag.",
    outcome:
      "Successfully identified and partially exploited a live SQLi vulnerability in a hardened environment, demonstrating WAF evasion, manual payload crafting, and offensive security adaptability.",
  },
];

export interface Cert {
  badge: string;
  title: string;
  org: string;
  date: string;
  description: string;
  id: string;
}

export const CERTS: Cert[] = [
  {
    badge: "★ High Distinction",
    title: "Certified in Web Application Security and Digital Forensics",
    org: "International Cybersecurity & Digital Forensics Academy (ICDFA)",
    date: "Issued: April 28, 2026 · Accredited by ACTD",
    description:
      "Awarded with High Distinction upon completing a 12-month structured professional training program at the School of Basic Vocational Training (SVT), Nasarawa State, Nigeria. Achieved a CSPA of 4.91 — the highest score in Batch A2025 — across 89 skill units covering web application security, digital forensics, cloud security, mobile/IoT forensics, and AI for forensics.",
    id: "Certificate ID: ICDFA-2026-7a3a-2CACDCFB-c8 · No: 78437",
  },
  {
    badge: "Foundation",
    title: "TechyJaunt Beginner Course in Cybersecurity",
    org: "TechyJaunt",
    date: "Completed: May 2025 · Issued: June 2025",
    description:
      "Completed a beginner-level cybersecurity training program held between January 2025 and May 2025, covering foundational concepts in cybersecurity. This was the starting point of my cybersecurity journey — the foundation that led to full certification at ICDFA with High Distinction.",
    id: "Credential ID: Tj5/2025/CS/013",
  },
];

export interface Experience {
  role: string;
  org: string;
  sub: string;
  period: string;
  description: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
}

export const EXPERIENCES: Experience[] = [
  {
    role: "Apprentice — Web Application Security & Digital Forensics",
    org: "International Cybersecurity & Digital Forensics Academy (ICDFA)",
    sub: "School of Basic Vocational Training (SVT) · Remote",
    period: "Mar 2025 — Apr 2026",
    description:
      "Underwent intensive hands-on training covering web application security testing, digital forensics investigation, and real-world attack/defense scenarios. Applied skills through practical assessments simulating professional cybersecurity environments. Awarded High Distinction with a CSPA of 4.91 — the highest score across Batch A2025 cohort of 49 students.",
    tags: [
      "Web App Security",
      "Digital Forensics",
      "Vulnerability Assessment",
      "Incident Response",
      "Cloud Security",
      "Mobile/IoT Forensics",
    ],
  },
  {
    role: "Webinar Moderator & Community Development Lead",
    org: "Digital First Aid Kit & Incident Response — ICDFA CSR-002",
    sub: "A2025 Digital First Responders Team (Group 5) · Virtual (Google Meet)",
    period: "April 2026",
    description:
      "Served as Moderator and primary organiser for a virtual cybersecurity awareness webinar attended by approximately 35 community members. Led the full session covering Account Takeover, Cyberbullying, and Social Engineering — using real-life Nigerian scenarios to make technical content accessible to a non-technical audience. Responsibilities spanned the full project lifecycle: co-researching the Account Takeover topic, drafting the community feedback form, conducting post-event data analysis, and authoring the final 37-page impact report. Post-presentation summaries delivered during the live session were specifically commended by attendees as a standout technique. The event achieved a 4.8/5 quality rating, 100% organisational satisfaction, and 100% knowledge-sharing intent — with an estimated community reach of 245–350 people.",
    tags: [
      "Event Moderation",
      "Community Education",
      "Incident Response Awareness",
      "Data Analysis",
      "Public Communication",
      "Cybersecurity Outreach",
    ],
    link: "https://drive.google.com/file/d/1qxj3WNqjPkwo6gcWpm54mOL62bton2I5/view?usp=sharing",
    linkLabel: "▶ Watch Session Recording →",
  },
];

export interface Education {
  period: string;
  degree: string;
  field: string;
  institution: string;
  description: string;
}

export const EDUCATION: Education[] = [
  {
    period: "Dec 2021 — Present",
    degree: "Bachelor of Engineering (B.Eng.)",
    field: "Electronics and Computer Engineering",
    institution: "University of Nigeria",
    description:
      "Currently pursuing a Bachelor of Engineering in Electronics and Computer Engineering. Simultaneously building a professional cybersecurity career through hands-on training, certifications, and real-world projects — demonstrating the ability to operate at a professional level alongside formal academic study.",
  },
  {
    period: "Mar 2025 — Apr 2026",
    degree: "Professional Training Certificate",
    field: "Web Application Security and Digital Forensics",
    institution:
      "International Cybersecurity & Digital Forensics Academy (ICDFA)",
    description:
      "Completed a 12-month intensive structured training program. Graduated with High Distinction — CSPA 4.91, highest in Batch A2025 cohort of 49 students. Training included two capstone projects in web application security and digital forensics investigations.",
  },
  {
    period: "Sep 2015 — Oct 2021",
    degree: "West African Senior School Certificate (WASSCE)",
    field: "Science & Technical",
    institution: "Yaba College of Technology Secondary School, Yaba, Lagos",
    description:
      "Completed WASSCE SC 2021 under WAEC. Subjects: Data Processing, English Language, Mathematics, Further Mathematics, Biology, Chemistry, Physics, Civic Education, and Technical Drawing. Candidate No: 4251539034.",
  },
];

export const CONTACT_ITEMS = [
  {
    icon: "✉",
    label: "Email",
    value: "ifeanyiegentiofficial3@gmail.com",
    href: "mailto:ifeanyiegentiofficial3@gmail.com",
  },
  {
    icon: "⌥",
    label: "GitHub",
    value: "github.com/IFEANYI-EGENTI",
    href: "https://github.com/IFEANYI-EGENTI",
  },
  {
    icon: "in",
    label: "LinkedIn",
    value: "Ifeanyi Egenti",
    href: "https://www.linkedin.com/in/ifeanyi-egenti-4671ba32b",
  },
  {
    icon: "X",
    label: "X (Twitter)",
    value: "@PROJECT_IFEANYI",
    href: "https://x.com/PROJECT_IFEANYI",
  },
];
