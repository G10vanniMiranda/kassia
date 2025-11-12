"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    return (
        <motion.a
            href="https://wa.me/5569993275765?text=Ol%C3%A1%20K%C3%A1ssia!%20Quero%20um%20or%C3%A7amento%20de%20v%C3%ADdeo.%20"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-(--color-brand-brown) shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:bg-(--color-brand-brown2) transition-colors"
            aria-label="Falar no WhatsApp"
        >
            <MessageCircle className="w-7 h-7 text-white" />
            <span className="absolute inset-0 rounded-full animate-ping bg-(--color-brand-brown) opacity-40" />
        </motion.a>
    );
}
