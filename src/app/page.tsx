import Header from "@/components/Header";
import Section from "@/components/Section";
import Chip from "@/components/Chip";
import VideoCard from "@/components/VideoCard";
import Footer from "@/components/Footer";
import { brands } from "@/data/brands";
import { videos } from "@/data/videos";
import Image from "next/image";

export default function Page() {
  return (
    <main className="bg-(--color-brand-bg) text-(--color-brand-ink)">
      <Header />

      {/* HERO / CAPA */}
      <section className="mx-auto max-w-6xl px-4 pt-10">
        <div className="grid md:grid-cols-[360px,1fr] gap-10 items-center">

          <div>
            <h1 className="text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-playfair)' }}>
              Portfólio
            </h1>
            <p className="mt-2 text-(--color-brand-mute)">
              Storymaker & Videomaker
            </p>
          </div>

          <div className="rounded-[18px] border border-(--color-brand-line) bg-(--color-brand-card) shadow-[0_10px_30px_rgba(0,0,0,.06)] p-2">
            <div className="relative aspect-3/4 rounded-[14px] overflow-hidden">
              <Image
                src="/kassia.JPEG"
                alt="Kássia segurando celular"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* SOBRE MIM */}
      <Section id="sobre" title="Sobre mim">
        <div className="space-y-4 max-w-3xl">
          <p>
            Sou <strong>Storymaker e Videomaker</strong>, estudante de Administração e apaixonada por
            transformar momentos e marcas em histórias visuais que conectam.
          </p>
          <p>
            Há um ano e meio no audiovisual, venho criando conteúdos criativos e autênticos que
            traduzem a essência de cada cliente, sempre com um olhar estratégico e sensibilidade estética.
          </p>
          <div className="pt-4">
            <span className="inline-block select-none text-(--color-brand-mute)">⸻</span>
          </div>
        </div>
      </Section>

      {/* MARCAS */}
      <Section id="marcas" title="Marcas com que já trabalhei">
        <div className="flex flex-wrap gap-3">
          {brands.map((b) => (
            <Chip key={b}>{b}</Chip>
          ))}
        </div>
        <div className="pt-8">
          <span className="inline-block select-none text-(--color-brand-mute)">⸻</span>
        </div>
      </Section>

      {/* PROJETOS */}
      <Section
        id="projetos"
        title="Projetos"
        subtitle="Cada projeto é uma nova oportunidade de contar histórias reais."
      >
        <p className="lead max-w-3xl">
          Já produzi desde vídeos promocionais e institucionais até coberturas de eventos e conteúdos
          para redes sociais, sempre buscando capturar a emoção e a mensagem certa para cada público.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {videos.map((v) => (
            <VideoCard key={v.title} {...v} />
          ))}
        </div>

        <div className="pt-10">
          <span className="inline-block select-none text-(--color-brand-mute)">⸻</span>
        </div>
      </Section>

      {/* CTA */}
      <section id="contato" className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-[18px] border border-(--color-brand-line) bg-(--color-brand-card) shadow-[0_10px_30px_rgba(0,0,0,.06)] p-8 md:p-10">
          <h3 className="text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-playfair)' }}>
            💬 Tenho o pacote ideal pra você!
          </h3>
          <p className="lead mt-2">
            Entre em contato e faça um orçamento comigo — vamos transformar sua ideia em um vídeo incrível.
          </p>
          <div className="mt-6">
            <a
              href="https://wa.me/5569999787798?text=Ol%C3%A1%20K%C3%A1ssia!%20Quero%20um%20or%C3%A7amento%20de%20v%C3%ADdeo.%20"
              className="inline-flex items-center px-6 py-3 rounded-[9999px] bg-(--color-brand-brown) text-white hover:bg-(--color-brand-brown2) transition"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
