import "./globals.css";
import { Inter, Playfair } from "next/font/google";
import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair({ subsets: ["latin"], variable: "--font-serif" });

export const metadata = {
  title: "Mi CV — Portfolio",
  description: "Portfolio profesional animado con GSAP y Next.js",
};

// 👇 Añadimos la interfaz correcta para el layout
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
