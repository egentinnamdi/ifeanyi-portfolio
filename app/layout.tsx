import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ifeanyi David Egenti — Cybersecurity Portfolio",
  description:
    "Certified in Web Application Security & Digital Forensics. ICDFA High Distinction — CSPA 4.91, #1 in Batch A2025.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
