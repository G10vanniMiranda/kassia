type Props = { title: string; client?: string; url: string };

export default function VideoCard({ title, client, url }: Props) {
  const isEmbed = /youtube\.com|youtu\.be|vimeo\.com/.test(url);
  return (
    <article className="rounded-soft bg-brand-card border border-brand-line shadow-soft overflow-hidden">
      <div className="aspect-9/16 bg-black">
        {isEmbed ? (
          <iframe
            className="w-full h-full"
            src={url}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <video className="w-full h-full" controls preload="metadata" title={title}>
            <source src={url} />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        )}
      </div>
      <div className="p-4">
        <p className="font-medium">{title}</p>
        {client && <p className="text-sm text-brand-mute">Cliente: {client}</p>}
      </div>
    </article>
  );
}
