"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [open, setOpen] = useState(false);

    const onKey = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", onKey);
        if (open) {
            const prev = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = prev;
                document.removeEventListener("keydown", onKey);
            };
        }
        return () => document.removeEventListener("keydown", onKey);
    }, [open, onKey]);

    const close = () => setOpen(false);

    return (
        <header className="sticky top-0 z-40 bg-(--color-brand-bg)/70 backdrop-blur border-b border-(--color-brand-line)">
            <div className="mx-auto max-w-6xl h-16 px-4 flex items-center justify-between">
                <Link href="/" className="font-semibold text-(--color-brand-brown)">
                    Kássia Silva
                </Link>

                {/* Navegação desktop */}
                <nav className="hidden md:flex md:items-center text-sm gap-5" aria-label="Navegação principal">
                    <a href="#sobre" className="hover:text-(--color-brand-brown)">Sobre</a>
                    <a href="#marcas" className="hover:text-(--color-brand-brown)">Marcas</a>
                    <a href="#projetos" className="hover:text-(--color-brand-brown)">Projetos</a>
                    <a
                        href="https://wa.me/5569993275765?text=Ol%C3%A1%20K%C3%A1ssia!%20Quero%20um%20or%C3%A7amento%20de%20v%C3%ADdeo.%20"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Solicitar orçamento via WhatsApp"
                        className="px-4 py-2 rounded-[9999px] bg-(--color-brand-brown) text-white hover:bg-(--color-brand-brown2) transition"
                    >
                        Orçamento
                    </a>
                </nav>

                {/* Botão hambúrguer (mobile) */}
                <button
                    className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-(--color-brand-line) bg-(--color-brand-card)"
                    aria-label="Abrir menu"
                    aria-controls="mobile-menu"
                    aria-expanded={open}
                    onClick={() => setOpen(true)}
                >
                    <Menu className="w-6 h-6 text-(--color-brand-ink)" />
                </button>
            </div>

            {/* Modal Mobile */}
            {open && (
                <>
                    {/* Overlay */}
                    <button
                        aria-label="Fechar menu"
                        onClick={close}
                        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
                    />
                    {/* Sheet / Modal */}
                    <div
                        id="mobile-menu"
                        role="dialog"
                        aria-modal="true"
                        className="fixed right-0 top-0 z-50 h-dvh w-[85%] max-w-xs bg-(--color-brand-card) border-l border-(--color-brand-line) shadow-[0_10px_30px_rgba(0,0,0,.15)] animate-in slide-in-from-right duration-200"
                    >
                        <div className="h-16 px-4 flex items-center justify-between border-b border-(--color-brand-line)">
                            <span className="font-medium text-(--color-brand-brown)">Menu</span>
                            <button
                                onClick={close}
                                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-(--color-brand-line)"
                            >
                                <X className="w-6 h-6" />
                                <span className="sr-only">Fechar</span>
                            </button>
                        </div>

                        <nav className="px-4 py-6">
                            <ul className="space-y-3 text-base">
                                <li>
                                    <a
                                        href="#sobre"
                                        onClick={close}
                                        className="block rounded-xl px-4 py-3 hover:bg-(--color-brand-chip)"
                                    >
                                        Sobre
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#marcas"
                                        onClick={close}
                                        className="block rounded-xl px-4 py-3 hover:bg-(--color-brand-chip)"
                                    >
                                        Marcas
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#projetos"
                                        onClick={close}
                                        className="block rounded-xl px-4 py-3 hover:bg-(--color-brand-chip)"
                                    >
                                        Projetos
                                    </a>
                                </li>
                            </ul>

                            <div className="pt-6">
                                <a
                                    href="https://wa.me/5569993275765?text=Ol%C3%A1%20K%C3%A1ssia!%20Quero%20um%20or%C3%A7amento%20de%20v%C3%ADdeo.%20"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Solicitar orçamento via WhatsApp"
                                    onClick={close}
                                    className="inline-flex items-center w-full justify-center px-5 py-3 rounded-[9999px] bg-(--color-brand-brown) text-white hover:bg-(--color-brand-brown2) transition"
                                >
                                    Orçamento
                                </a>
                            </div>
                        </nav>
                    </div>
                </>
            )}
        </header>
    );
}
