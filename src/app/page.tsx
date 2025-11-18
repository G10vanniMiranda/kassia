import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { brands } from "@/data/brands";
import { videos } from "@/data/videos";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import BrandsSection from "@/components/sections/BrandsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "Kássia Silva — Portfólio",
  description:
    "Storymaker & Videomaker. Portfólio com projetos para marcas e conteúdos sensíveis e modernos.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kássia Silva — Portfólio",
    description:
      "Storymaker & Videomaker. Portfólio com projetos para marcas e conteúdos sensíveis e modernos.",
    type: "website",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Capa do portfólio de Kássia Silva",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kássia Silva — Portfólio",
    description:
      "Storymaker & Videomaker. Portfólio com projetos para marcas e conteúdos sensíveis e modernos.",
    images: ["/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Page() {
  return (
    <main className="bg-(--color-brand-bg) text-(--color-brand-ink)">
      {/* JSON-LD: WebSite e Person */}
      <Script id="ld-website" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Kássia Silva — Portfólio",
          url: "/",
          inLanguage: "pt-BR",
          potentialAction: {
            "@type": "SearchAction",
            target: "/?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        })}
      </Script>
      <Script id="ld-person" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Kássia Silva",
          jobTitle: "Storymaker & Videomaker",
          url: "/",
        })}
      </Script>
      <Header />
      <HeroSection />
      <AboutSection />
      <BrandsSection brands={brands} />
      <ProjectsSection videos={videos} />
      <CtaSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
