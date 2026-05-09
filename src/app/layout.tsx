import type { Metadata } from "next";
import { Oswald, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  preload: true,
  weight: ["600", "700"],
  variable: "--font-heading",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  preload: true,
  weight: ["400", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "JW Tree Work Inc. | Expert Tree Services",
  description:
    "Professional tree removal, trimming, and emergency storm response across Central Florida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${sourceSerif.variable}`}>
      <body className="font-body bg-background text-foreground antialiased">
        <a
          href="#main-content"
          className="sr-only z-[70] rounded-md bg-accent px-4 py-2 text-sm text-accent-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
