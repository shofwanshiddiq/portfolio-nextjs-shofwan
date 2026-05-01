import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shofwan Shiddiq — Software Engineer",
  description: "Software Engineer specializing in full-stack development, .NET ecosystem, and cybersecurity.",
  icons: {
    icon: '/sslogo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=DM+Mono&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
