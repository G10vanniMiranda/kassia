import type { Config } from "tailwindcss";

// Custom brand palette and base design tokens
const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./src/**/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#F5F3F2", // cinza claro rosado
          card: "#FFFFFF",
          ink: "#2C2A29",
          mute: "#7A7471",
          brown: "#B6866E", // marrom suave
          brown2: "#9F725A", // hover
          line: "#E8E3E0",
          chip: "#F0E7E3",
        },
      },
      borderRadius: {
        soft: "18px",
        pill: "9999px",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.06)",
      },
    },
  },
  plugins: [],
};

export default config;
