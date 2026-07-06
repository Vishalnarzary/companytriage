import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Company Triage Simulator",
  description: "Simulate customer support triage with Gemini 2.5 Flash.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
