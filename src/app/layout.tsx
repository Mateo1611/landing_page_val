import type { Metadata } from "next";
import { Archivo, Archivo_Black, JetBrains_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { defaultMetadata } from "@/config/seo";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${archivo.variable} ${archivoBlack.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SmoothScrollProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
