import Section from "@/components/Section";

export default function AboutSection() {
  return (
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
  );
}
