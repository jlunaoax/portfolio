import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Javier Luna | Senior Fullstack Developer",
  description:
    "Senior Fullstack Developer specializing in Java, Spring Boot, Angular, React, and AWS. Triple AWS certified. Open to opportunities in Europe.",
  keywords: [
    "fullstack developer",
    "java developer",
    "spring boot",
    "angular",
    "react",
    "aws certified",
    "europe",
    "microservices",
  ],
  openGraph: {
    title: "Javier Luna | Senior Fullstack Developer",
    description:
      "Senior Fullstack Developer - Java, Spring Boot, Angular, React, AWS. Open to Europe.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
