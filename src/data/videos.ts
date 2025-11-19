export type VideoRatio = "9:16" | "16:9";
export type VideoKind = "Reel" | "Story" | "Institucional" | "Produto" | "Evento" | "Social";

export type VideoItem = {
  id: string;
  title: string;
  client?: string;
  url: string;
  poster?: string;
  duration?: string;
  ratio?: VideoRatio;
  kind?: VideoKind;
  tags?: string[];
};

// TODOS COMO "Reel" por padrão
// TODOS COMO "9:16" (você ajusta depois)

export const videos: VideoItem[] = [
  // aaronAcessorios
  {
    id: "aaronAcessorios-1",
    title: "Reel — Aaron Acessórios 1",
    client: "Aaron Acessórios",
    url: "/videos/aaronAcessorios/video1.mp4",
    poster: "/posters/aaronAcessorios/video1.jpg",
    kind: "Reel",
    ratio: "9:16",
  },

  // advogadaLayne
  {
    id: "advogadaLayne-1",
    title: "Reel — Advogada Layne 1",
    client: "Advogada Layne",
    url: "/videos/advogadaLayne/video1.mp4",
    poster: "/posters/advogadaLayne/video1.jpg",
    kind: "Reel",
    ratio: "9:16",
  },

  // alineBronze
  {
    id: "alineBronze-1",
    title: "Reel — Aline Bronze 1",
    client: "Aline Bronze",
    url: "/videos/alineBronze/video1.mp4",
    poster: "/posters/alineBronze/video1.jpg",
    kind: "Reel",
    ratio: "9:16",
  },

  // cangaty
  {
    id: "cangaty-1",
    title: "Reel — Cangaty 1",
    client: "Cangaty",
    url: "/videos/cangaty/video1.mp4",
    poster: "/posters/cangaty/video1.jpg",
    kind: "Reel",
    ratio: "9:16",
  },

  // charlesOliveira
  {
    id: "charlesOliveira-1",
    title: "Reel — Charles Oliveira 1",
    client: "Charles Oliveira",
    url: "/videos/charlesOliveira/video1.mp4",
    poster: "/posters/charlesOliveira/video1.jpg",
    kind: "Reel",
    ratio: "9:16",
  },

  // cnbCapoeira
  {
    id: "cnbCapoeira-1",
    title: "Reel — CNB Capoeira 1",
    client: "CNB Capoeira",
    url: "/videos/cnbCapoeira/video1.mp4",
    poster: "/posters/cnbCapoeira/video1.jpg",
    kind: "Reel",
    ratio: "9:16",
  },

  // india
  {
    id: "india-1",
    title: "Reel — Índia 1",
    client: "Índia",
    url: "/videos/india/video1.mp4",
    poster: "/posters/india/video1.jpg",
    kind: "Reel",
    ratio: "9:16",
  },
  {
    id: "india-2",
    title: "Reel — Índia 2",
    client: "Índia",
    url: "/videos/india/video2.mp4",
    poster: "/posters/india/video2.jpg",
    kind: "Reel",
    ratio: "9:16",
  },
  {
    id: "india-3",
    title: "Reel — Índia 3",
    client: "Índia",
    url: "/videos/india/video3.mp4",
    poster: "/posters/india/video3.jpg",
    kind: "Reel",
    ratio: "9:16",
  },

  // katiuceSantos
  {
    id: "katiuceSantos-1",
    title: "Reel — Katiuce Santos 1",
    client: "Katiuce Santos",
    url: "/videos/katiuceSantos/video1.mp4",
    poster: "/posters/katiuceSantos/video1.jpg",
    kind: "Reel",
    ratio: "9:16",
  },
  {
    id: "katiuceSantos-2",
    title: "Reel — Katiuce Santos 2",
    client: "Katiuce Santos",
    url: "/videos/katiuceSantos/video2.mp4",
    poster: "/posters/katiuceSantos/video2.jpg",
    kind: "Reel",
    ratio: "9:16",
  },

  // lgProducoes
  {
    id: "lgProducoes-1",
    title: "Reel — LG Produções 1",
    client: "LG Produções",
    url: "/videos/lgProducoes/video1.mp4",
    poster: "/posters/lgProducoes/video1.jpg",
    kind: "Reel",
    ratio: "9:16",
  },

  // lucioSamurai
  {
    id: "lucioSamurai-1",
    title: "Reel — Lúcio Samurai 1",
    client: "Lúcio Samurai",
    url: "/videos/lucioSamurai/video1.mp4",
    poster: "/posters/lucioSamurai/video1.jpg",
    kind: "Reel",
    ratio: "9:16",
  },
  {
    id: "lucioSamurai-2",
    title: "Reel — Lúcio Samurai 2",
    client: "Lúcio Samurai",
    url: "/videos/lucioSamurai/video2.mp4",
    poster: "/posters/lucioSamurai/video2.jpg",
    kind: "Reel",
    ratio: "9:16",
  },
  {
    id: "lucioSamurai-3",
    title: "Reel — Lúcio Samurai 3",
    client: "Lúcio Samurai",
    url: "/videos/lucioSamurai/video3.mp4",
    poster: "/posters/lucioSamurai/video3.jpg",
    kind: "Reel",
    ratio: "9:16",
  },

  // mestreCuca
  {
    id: "mestreCuca-1",
    title: "Reel — Mestre Cuca 1",
    client: "Mestre Cuca",
    url: "/videos/mestreCuca/video1.mp4",
    poster: "/posters/mestreCuca/video1.jpg",
    kind: "Reel",
    ratio: "9:16",
  },

  // moveOnRecovery
  {
    id: "moveOnRecovery-1",
    title: "Reel — MoveOn Recovery 1",
    client: "MoveOn Recovery",
    url: "/videos/moveOnRecovery/video1.mp4",
    poster: "/posters/moveOnRecovery/video1.jpg",
    kind: "Reel",
    ratio: "9:16",
  },
  {
    id: "moveOnRecovery-2",
    title: "Reel — MoveOn Recovery 2",
    client: "MoveOn Recovery",
    url: "/videos/moveOnRecovery/video2.mp4",
    poster: "/posters/moveOnRecovery/video2.jpg",
    kind: "Reel",
    ratio: "9:16",
  },
  {
    id: "moveOnRecovery-3",
    title: "Reel — MoveOn Recovery 3",
    client: "MoveOn Recovery",
    url: "/videos/moveOnRecovery/video3.mp4",
    poster: "/posters/moveOnRecovery/video3.jpg",
    kind: "Reel",
    ratio: "9:16",
  },

  // pharmaPele
  {
    id: "pharmaPele-1",
    title: "Reel — Pharmapele 1",
    client: "Pharmapele",
    url: "/videos/pharmaPele/video1.mp4",
    poster: "/posters/pharmaPele/video1.jpg",
    kind: "Reel",
    ratio: "9:16",
  },
  {
    id: "pharmaPele-2",
    title: "Reel — Pharmapele 2",
    client: "Pharmapele",
    url: "/videos/pharmaPele/video2.mp4",
    poster: "/posters/pharmaPele/video2.jpg",
    kind: "Reel",
    ratio: "9:16",
  },
  {
    id: "pharmaPele-3",
    title: "Reel — Pharmapele 3",
    client: "Pharmapele",
    url: "/videos/pharmaPele/video3.mp4",
    poster: "/posters/pharmaPele/video3.jpg",
    kind: "Reel",
    ratio: "9:16",
  },
  {
    id: "pharmaPele-4",
    title: "Reel — Pharmapele 4",
    client: "Pharmapele",
    url: "/videos/pharmaPele/video4.mp4",
    poster: "/posters/pharmaPele/video4.jpg",
    kind: "Reel",
    ratio: "9:16",
  },
  {
    id: "pharmaPele-5",
    title: "Reel — Pharmapele 5",
    client: "Pharmapele",
    url: "/videos/pharmaPele/video5.mp4",
    poster: "/posters/pharmaPele/video5.jpg",
    kind: "Reel",
    ratio: "9:16",
  },
  {
    id: "pharmaPele-6",
    title: "Reel — Pharmapele 6",
    client: "Pharmapele",
    url: "/videos/pharmaPele/video6.mp4",
    poster: "/posters/pharmaPele/video6.jpg",
    kind: "Reel",
    ratio: "9:16",
  },
  {
    id: "pharmaPele-7",
    title: "Reel — Pharmapele 7",
    client: "Pharmapele",
    url: "/videos/pharmaPele/video7.mp4",
    poster: "/posters/pharmaPele/video7.jpg",
    kind: "Reel",
    ratio: "9:16",
  },

  // restauranteParadzzi
  {
    id: "restauranteParadzzi-1",
    title: "Reel — Restaurante Paradzzi 1",
    client: "Restaurante Paradzzi",
    url: "/videos/restauranteParadzzi/video1.mp4",
    poster: "/posters/restauranteParadzzi/video1.jpg",
    kind: "Reel",
    ratio: "9:16",
  },
  {
    id: "restauranteParadzzi-2",
    title: "Reel — Restaurante Paradzzi 2",
    client: "Restaurante Paradzzi",
    url: "/videos/restauranteParadzzi/video2.mp4",
    poster: "/posters/restauranteParadzzi/video2.jpg",
    kind: "Reel",
    ratio: "9:16",
  },

  // rodriguesColchoes
  {
    id: "rodriguesColchoes-1",
    title: "Reel — Rodrigues Colchões 1",
    client: "Rodrigues Colchões",
    url: "/videos/rodriguesColchoes/video1.mp4",
    poster: "/posters/rodriguesColchoes/video1.jpg",
    kind: "Reel",
    ratio: "9:16",
  },
  {
    id: "rodriguesColchoes-2",
    title: "Reel — Rodrigues Colchões 2",
    client: "Rodrigues Colchões",
    url: "/videos/rodriguesColchoes/video2.mp4",
    poster: "/posters/rodriguesColchoes/video2.jpg",
    kind: "Reel",
    ratio: "9:16",
  },
  {
    id: "rodriguesColchoes-3",
    title: "Reel — Rodrigues Colchões 3",
    client: "Rodrigues Colchões",
    url: "/videos/rodriguesColchoes/video3.mp4",
    poster: "/posters/rodriguesColchoes/video3.jpg",
    kind: "Reel",
    ratio: "9:16",
  },
  {
    id: "rodriguesColchoes-4",
    title: "Reel — Rodrigues Colchões 4",
    client: "Rodrigues Colchões",
    url: "/videos/rodriguesColchoes/video4.mp4",
    poster: "/posters/rodriguesColchoes/video4.jpg",
    kind: "Reel",
    ratio: "9:16",
  },
  {
    id: "rodriguesColchoes-5",
    title: "Reel — Rodrigues Colchões 5",
    client: "Rodrigues Colchões",
    url: "/videos/rodriguesColchoes/video5.mp4",
    poster: "/posters/rodriguesColchoes/video5.jpg",
    kind: "Reel",
    ratio: "9:16",
  },
  {
    id: "rodriguesColchoes-6",
    title: "Reel — Rodrigues Colchões 6",
    client: "Rodrigues Colchões",
    url: "/videos/rodriguesColchoes/video6.mp4",
    poster: "/posters/rodriguesColchoes/video6.jpg",
    kind: "Reel",
    ratio: "9:16",
  },
  {
    id: "rodriguesColchoes-7",
    title: "Reel — Rodrigues Colchões 7",
    client: "Rodrigues Colchões",
    url: "/videos/rodriguesColchoes/video7.mp4",
    poster: "/posters/rodriguesColchoes/video7.jpg",
    kind: "Reel",
    ratio: "9:16",
  },

  // velocityPet
  {
    id: "velocityPet-1",
    title: "Reel — Velocity Pet 1",
    client: "Velocity Pet",
    url: "/videos/velocityPet/video1.mp4",
    poster: "/posters/velocityPet/video1.jpg",
    kind: "Reel",
    ratio: "9:16",
  },
];
