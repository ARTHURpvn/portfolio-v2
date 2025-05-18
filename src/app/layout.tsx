import type { Metadata } from "next";
import { Epilogue, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import I18nProvider from "@/components/I18nProvider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ARTHURpvn | FullStack Developer",
  description:
    "Portfólio de desenvolvedor fullstack especializado em React, Next.js, TypeScript e mais. Veja projetos, serviços e entre em contato",
  keywords: "Desenvolvedor, FullStack, React, Next.js, Portfólio, TypeScript, Freelancer",
  authors: [{ name: "Arthur Pavan", url: "https://arthurpvn.netlify.app" }],

  openGraph: {
    title: "ARTHURpvn | FullStack Developer",
    description:
      "Portfólio de desenvolvedor fullstack especializado em React, Next.js, TypeScript e mais. Veja projetos, serviços e entre em contato",
    url: "https://arthurpvn.dev",
    siteName: "arthurpvn.dev",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "arthurpvn.dev",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ARTHURpvn | FullStack Developer",
    description:
      "Portfólio de desenvolvedor fullstack especializado em React, Next.js, TypeScript e mais. Veja projetos, serviços e entre em contato",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${montserrat.variable} ${epilogue.className} dark overflow-x-hidden antialiased`}
      >
        <I18nProvider>
          <Header />
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
