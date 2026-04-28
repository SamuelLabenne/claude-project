import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sans = Inter({
  variable: "--font-sans-custom",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono-custom",
  subsets: ["latin"],
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "All Set Consulting — CRM & ERP, fully aligned",
  description:
    "All Set Consulting designs and ships CRM and ERP implementations that match how your business actually runs. Set up. Switched on. All set.",
  metadataBase: new URL("https://allsetconsulting.com"),
  openGraph: {
    title: "All Set Consulting",
    description: "CRM & ERP implementations, fully aligned with how you actually work.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${display.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
