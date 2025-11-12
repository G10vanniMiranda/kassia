export default function CtaSection() {
    return (
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
                        href="https://wa.me/5569993275765?text=Ol%C3%A1%20K%C3%A1ssia!%20Quero%20um%20or%C3%A7amento%20de%20v%C3%ADdeo.%20"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Falar no WhatsApp com Kássia"
                        className="inline-flex items-center px-6 py-3 rounded-[9999px] bg-(--color-brand-brown) text-white hover:bg-(--color-brand-brown2) transition"
                    >
                        Falar no WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
