import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-40 bg-brand-bg/70 backdrop-blur border-b border-brand-line">
            <div className="mx-auto max-w-6xl h-16 px-4 flex items-center justify-between">
                <Link href="/" className="font-semibold text-brand-brown">
                    Kássia Silva
                </Link>
                <nav className="text-sm flex gap-5" aria-label="Navegação principal">
                    <a href="#sobre" className="hover:text-brand-brown">Sobre</a>
                    <a href="#marcas" className="hover:text-brand-brown">Marcas</a>
                    <a href="#projetos" className="hover:text-brand-brown">Projetos</a>
                    <a
                        href="#contato"
                        className="px-4 py-2 rounded-pill bg-brand-brown text-brand-brown hover:bg-brand-brown2 transition"
                    >
                        Orçamento
                    </a>
                </nav>
            </div>
        </header>
    );
}
