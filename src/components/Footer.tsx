export default function Footer() {
  return (
    <footer className="border-t border-brand-line mt-10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-brand-mute">
        © {new Date().getFullYear()} Kássia Silva — Storymaker & Videomaker
      </div>
    </footer>
  );
}
