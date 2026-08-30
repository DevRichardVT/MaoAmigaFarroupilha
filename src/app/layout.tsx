import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mão Amiga Farroupilha",
  description: "Projeto de contraturno escolar para crianças e adolescentes em situação de vulnerabilidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased text-gray-800 bg-gray-50 flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
