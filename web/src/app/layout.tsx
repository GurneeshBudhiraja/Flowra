import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flowra | AI Website Copilot",
  description:
    "Flowra guides users through websites and products in real time with live voice and AI cursor assistance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
