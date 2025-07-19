import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfólio Hacker Paulo Amancio",
  description: "Portfólio estilo terminal hacker com Next.js e Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-background text-foreground font-mono">
        {children}
      </body>
    </html>
  );
}
