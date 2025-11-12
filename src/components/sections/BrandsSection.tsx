import Chip from "@/components/Chip";
import Section from "@/components/Section";

export default function BrandsSection({ brands }: { brands: readonly string[] }) {
  return (
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
  );
}
