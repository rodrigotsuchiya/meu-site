import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap", // Garante que o texto seja visível imediatamente com fonte do sistema
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tsuchiyatech.com.br"),
  title: "Automação com IA em Sorocaba | Tsuchiya Tech",
  description: "Transforme seu negócio com a agência de automação com inteligência artificial em Sorocaba. Criação de sites e sistemas com agilidade. Agende sua análise.",
  openGraph: {
    title: "Tsuchiya Tech | Automação e IA em Sorocaba",
    description: "Engenharia de software ágil. Criação de sites e automação inteligente para empresas que buscam alta performance.",
    url: "https://tsuchiyatech.com.br",
    siteName: "Tsuchiya Tech",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tsuchiya Tech - Automação e IA em Sorocaba",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tsuchiya Tech | Automação e IA em Sorocaba",
    description: "Engenharia de software ágil. Criação de sites e automação inteligente para empresas que buscam alta performance.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://wa.me" />
        <link rel="preconnect" href="https://formspree.io" />
        <link rel="preconnect" href="https://api.whatsapp.com" />
      </head>
      <body className={`${spaceGrotesk.variable} font-sans antialiased selection:bg-black selection:text-bg`}>
        {children}
      </body>
    </html>
  );
}
