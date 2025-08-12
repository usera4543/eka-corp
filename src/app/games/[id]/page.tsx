import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import gamesData from "@/data/games.json";
import Reveal from "@/components/Reveal";

type Game = {
  id: string;
  title: string;
  description: string;
  image: string;
  youtubeVideo?: string;
  screenshots?: string[];
  features?: string[];
  technicalSpecs?: {
    platform: string;
    genre: string;
    release: string;
    engine: string;
    graphics?: string;
    audio?: string;
  };
  trailerUrl?: string;
  playStoreUrl?: string;
};

export function generateStaticParams() {
  const games = gamesData as Game[];
  return games.map((g) => ({ id: g.id }));
}

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function GameDetailPage({ params }: PageProps) {
  const games = gamesData as Game[];
  const resolvedParams = await params;
  const game = games.find((g) => g.id === resolvedParams.id);
  if (!game) {
    notFound();
  }

  const playStoreHref = game.playStoreUrl ?? "https://play.google.com/store/apps/dev?id=eka-corp";

  return (
    <div className="bg-darkNavy text-white min-h-screen">
      <header className="w-full text-center py-10 sm:py-14 px-4 bg-[var(--color-primary)]" aria-label="Game details header">
        <Reveal>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{game.title}</h1>
        </Reveal>
        <Reveal>
          <p className="mt-3 text-white/90 max-w-2xl mx-auto text-sm sm:text-base">Full game details and media</p>
        </Reveal>
      </header>

      <main className="w-full max-w-5xl mx-auto px-4 pb-16">
        {/* Cover Image */}
        <section className="mb-10" aria-labelledby="cover-heading">
          <h2 id="cover-heading" className="sr-only">Cover image</h2>
          <Reveal>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[var(--color-light)]">
              <Image
                src={game.image}
                alt={`${game.title} cover image`}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
        </section>

        {/* Description and Download */}
        <section className="mb-12 grid grid-cols-1 lg:grid-cols-3 gap-8" aria-labelledby="details-heading">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 id="details-heading" className="text-2xl font-bold mb-3">About {game.title}</h2>
            </Reveal>
            <Reveal>
              <p className="text-white/90 leading-7">{game.description}</p>
            </Reveal>
          </div>
          <aside className="lg:col-span-1 self-start">
            <Reveal>
              <div className="bg-white text-[var(--color-navy)] rounded-xl p-5 shadow-lg">
                <h3 className="text-lg font-semibold mb-3">Get the Game</h3>
                <Link
                  href={playStoreHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn inline-block w-full text-center rounded-full bg-[var(--color-accent)] text-white font-semibold px-6 py-3 shadow-md hover:bg-[var(--color-purple)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2"
                  aria-label={`Download ${game.title} on Play Store`}
                >
                  Download on Play Store
                </Link>
                <p className="mt-3 text-xs text-[color-mix(in_oklab,var(--color-navy)_68%,white)]">Placeholder link</p>
              </div>
            </Reveal>
          </aside>
        </section>

        {/* Screenshots */}
        <section className="mb-8" aria-labelledby="screenshots-heading">
          <h2 id="screenshots-heading" className="text-2xl font-bold mb-4">Screenshots</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {(game.screenshots || [1, 2, 3]).map((screenshot, index) => (
              <Reveal key={index}>
                <div className="relative w-full aspect-video rounded-lg overflow-hidden group cursor-pointer">
                  <Image
                    src={typeof screenshot === 'string' ? screenshot : `/images/game-${((index % 3) + 1)}.svg`}
                    alt={`${game.title} screenshot ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* YouTube Trailer */}
        <section className="mb-8" aria-labelledby="trailer-heading">
          <h2 id="trailer-heading" className="text-2xl font-bold mb-4">Gameplay Trailer</h2>
          <Reveal>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              {game.youtubeVideo ? (
                <iframe
                  src={game.youtubeVideo}
                  title={`${game.title} gameplay trailer`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white/60 rounded-xl">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🎮</div>
                    <p>Trailer coming soon</p>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        </section>

        {/* Game Features */}
        {game.features && (
          <section className="mb-8" aria-labelledby="features-heading">
            <h2 id="features-heading" className="text-2xl font-bold mb-4">Key Features</h2>
            <Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {game.features.map((feature, index) => (
                  <div key={index} className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-4 flex-shrink-0"></div>
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </section>
        )}

        {/* Technical Specifications */}
        {game.technicalSpecs && (
          <section className="mb-8" aria-labelledby="tech-specs-heading">
            <h2 id="tech-specs-heading" className="text-2xl font-bold mb-4">Technical Specifications</h2>
            <Reveal>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <span className="text-white/50 block text-sm mb-1">Platforms</span>
                    <span className="text-white font-medium">{game.technicalSpecs.platform}</span>
                  </div>
                  <div>
                    <span className="text-white/50 block text-sm mb-1">Genre</span>
                    <span className="text-white font-medium">{game.technicalSpecs.genre}</span>
                  </div>
                  <div>
                    <span className="text-white/50 block text-sm mb-1">Release Date</span>
                    <span className="text-white font-medium">{game.technicalSpecs.release}</span>
                  </div>
                  <div>
                    <span className="text-white/50 block text-sm mb-1">Engine</span>
                    <span className="text-white font-medium">{game.technicalSpecs.engine}</span>
                  </div>
                  {game.technicalSpecs.graphics && (
                    <div>
                      <span className="text-white/50 block text-sm mb-1">Graphics</span>
                      <span className="text-white font-medium">{game.technicalSpecs.graphics}</span>
                    </div>
                  )}
                  {game.technicalSpecs.audio && (
                    <div>
                      <span className="text-white/50 block text-sm mb-1">Audio</span>
                      <span className="text-white font-medium">{game.technicalSpecs.audio}</span>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          </section>
        )}

        {/* Back link */}
        <div className="mt-10">
          <Link
            href="/games"
            className="inline-block rounded-full border-2 border-[var(--color-accent)] text-[var(--color-accent)] font-semibold px-6 py-2 hover:bg-[var(--color-purple)] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2"
            aria-label="Back to games list"
          >
            Back to Games
          </Link>
        </div>
      </main>
    </div>
  );
}


