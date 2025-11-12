export default function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-4 py-2 rounded-pill bg-brand-chip text-brand-ink/80 border border-brand-line">
      {children}
    </span>
  );
}
