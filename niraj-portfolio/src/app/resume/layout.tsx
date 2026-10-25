import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Niraj Charpe - Resume",
  description: "Resume of Niraj Charpe, Software Developer & IT Professional",
  robots: "noindex, nofollow",
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return children;
}