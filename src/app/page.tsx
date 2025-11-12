import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { brands } from "@/data/brands";
import { videos } from "@/data/videos";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import BrandsSection from "@/components/sections/BrandsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CtaSection from "@/components/sections/CtaSection";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Page() {
  return (
    <main className="bg-(--color-brand-bg) text-(--color-brand-ink)">
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
