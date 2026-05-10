import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Agency Landing Page",
  description: "A modern agency landing page inspired by premium creative studios.",
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