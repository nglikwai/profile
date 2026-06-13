import type { Metadata } from "next";
import "@/components/win98.css";

export const metadata: Metadata = {
  title: "LIK WAI NG",
  description:
    "Portfolio of LIK WAI NG, full stack developer — in glorious Windows 98 style.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
