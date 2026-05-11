"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id], div[id]");
      let current = "";
      sections.forEach((section) => {
        const el = section as HTMLElement;
        if (window.scrollY >= el.offsetTop - 100) {
          current = el.getAttribute("id") ?? "";
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 h-[10vh] py-10 bg-[rgba(5,12,20,0.85)] backdrop-blur-xl border-b border-[rgba(0,255,224,0.12)]">
      <div className="font-mono text-[13px] text-accent tracking-widest uppercase">
        IDE // Portfolio
      </div>
      <ul className="hidden md:flex gap-8 list-none">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={cn(
                "font-mono text-[11px] tracking-widest uppercase transition-colors duration-200",
                active === link.href.slice(1)
                  ? "text-accent"
                  : "text-text2 hover:text-accent",
              )}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
