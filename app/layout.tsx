import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import FloatingChat from "@/components/FloatingChat";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Himanshu Sharma — Broadcast & Cloud Operations Specialist",
  description:
    "Broadcast and cloud operations engineer with 11+ years of experience. Delivered 99.9% uptime across 1,500+ live NHL events. Avid-compatible workflows, AWS Media Services, enterprise networking, and founder of The KPI Hub.",
  keywords: [
    "Broadcast Engineer",
    "NHL Broadcast Support",
    "AWS MediaLive",
    "Avid Media Composer",
    "Avid NEXIS ISIS",
    "Live Streaming",
    "Post-Production Support",
    "ServiceNow",
    "Cloud Media Operations",
    "SaaS Founder",
    "AI Systems",
    "VSAT Engineering",
    "IP Video",
  ],
  authors: [{ name: "Himanshu Sharma" }],
  openGraph: {
    title: "Himanshu Sharma — Broadcast & Cloud Operations Specialist",
    description:
      "11+ years in live broadcast infrastructure. 99.9% uptime across 1,500+ NHL events. Avid workflows, AWS Media Services, and founder of The KPI Hub.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black text-white">
        {children}
        <FloatingChat />
      </body>
    </html>
  );
}
