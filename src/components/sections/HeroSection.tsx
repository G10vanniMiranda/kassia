import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="mx-auto max-w-6xl px-4 pt-10">
            <div className="grid md:grid-cols-[360px,1fr] gap-10 items-center">

                <div>
                    <h1 className="text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-playfair)' }}>
                        Portfólio
                    </h1>
                    <p className="mt-2 text-(--color-brand-mute)">Storymaker & Videomaker</p>
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
    );
}
