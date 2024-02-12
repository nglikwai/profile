import { ThemeProvider } from "@mui/material";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { theme } from "@/constants/theme";
import AppProvider from "@/context/app";
import { dir } from "i18next";
import { languages } from "../i18n/settings";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LIK WAI Profile",
  description: "My Profilelio Works in One Place",
  icons: {
    icon: {
      url: "./icon.png",
      type: "image/png",
    },
  },
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <body className={inter.className}>{children}</body>
        </AppProvider>
      </ThemeProvider>
    </html>
  );
}
