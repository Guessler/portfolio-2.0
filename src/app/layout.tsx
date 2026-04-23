import type { Metadata } from "next";
import { Inter, Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import { LanguageProvider } from "@/providers/LanguageProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import ThemeToggle from "@/components/shared/ThemeToggle";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Fullstack developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${spaceGrotesk.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col px-2.5 md:px-5">
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <div className="mt-30">{children}</div>
            <ThemeToggle />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}