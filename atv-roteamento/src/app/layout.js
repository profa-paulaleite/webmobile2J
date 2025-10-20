import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Galeria de Destinos",
  description: "Site de galeria de destinos para fazer viagens.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <h1> Galeria de Destinos de Viagem </h1>
          <nav>
            <Link href="/"> Início </Link>
          </nav>
        </header>

        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
