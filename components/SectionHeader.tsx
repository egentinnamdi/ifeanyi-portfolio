import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  num: string;
  title: string;
  className?: string;
}

export function SectionHeader({ num, title, className }: SectionHeaderProps) {
  return (
    <div className={cn("flex items-center gap-5 mb-14", className)}>
      <span className="font-mono text-[11px] text-accent tracking-widest">
        {num}
      </span>
      <h2 className="text-[clamp(21px,4vw,42px)] font-extrabold tracking-tight text-text1">
        {title}
      </h2>
      <div className="flex-1 h-px bg-[rgba(0,255,224,0.12)] max-w-[200px]" />
    </div>
  );
}
