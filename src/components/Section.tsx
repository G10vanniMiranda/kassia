import { ReactNode } from "react";

export default function Section({
    id, title, subtitle, children
}: { id?: string; title: string; subtitle?: string; children: ReactNode }) {
    return (
        <section id={id} className="mx-auto max-w-6xl px-4 py-14">
            <header className="mb-8">
                <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {title}
                </h2>
                {subtitle && <p className="lead mt-2">{subtitle}</p>}
            </header>
            <div>{children}</div>
        </section>
    );
}
