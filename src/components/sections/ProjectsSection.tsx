import Section from "@/components/Section";
import VideoCard from "@/components/VideoCard";
import type { VideoItem } from "@/data/videos";

export default function ProjectsSection({ videos }: { videos: VideoItem[] }) {
  return (
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
  );
}
