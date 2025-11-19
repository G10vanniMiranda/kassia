import "./globals.css";
import type { Metadata } from "next";
import { Nunito, Playfair_Display } from "next/font/google";

// Font configuration: Nunito (sans) + Playfair Display (serif for headings)
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Kássia Silva — Storymaker & Videomaker",
  description:
    "Portfólio de Kássia Silva: vídeos sensíveis e modernos para marcas que desejam se conectar.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
  },
  openGraph: {
    title: "Kássia Silva — Portfólio",
    description: "Storymaker & Videomaker.",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Capa do portfólio de Kássia Silva",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  authors: [{ name: "Kássia Silva" }],
  metadataBase: new URL("https://kassia.example.com"), // TODO: replace with real domain
  alternates: { canonical: "https://kassia.example.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${nunito.variable} ${playfair.variable} bg-brand-bg text-brand-ink antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
