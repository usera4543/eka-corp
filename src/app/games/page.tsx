import Image from "next/image";
import Link from "next/link";
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
};

export default function GamesPage() {
  const games = gamesData as Game[];

  return (
    <div className="bg-[var(--color-navy)] text-white min-h-screen flex flex-col">
      {/* Hero Header */}
      <header
        className="w-full text-center py-16 sm:py-20 px-4 bg-[var(--color-primary)] relative overflow-hidden"
        aria-label="All Games header"
      >
        {/* Background Accent (keeps dual-color theme intact) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent" />
        </div>

        <div className="relative z-10">
          <Reveal>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
              Our Games
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-lg sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Discover our latest titles crafted with passion and innovation
            </p>
          </Reveal>
          {/* Removed the three chips (Games Available, Multiple Platforms, Coming Soon) */}
        </div>
      </header>

      {/* Games Grid */}
      <main
        className="w-full max-w-7xl mx-auto px-4 py-16 sm:py-20"
        aria-labelledby="games-grid-heading"
      >
        <div className="text-center mb-12">
          <Reveal>
            <h2
              id="games-grid-heading"
              className="text-2xl sm:text-3xl font-bold text-white mb-4"
            >
              Featured Collection
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-white/70 max-w-2xl mx-auto">
              Each game represents our commitment to quality, innovation, and player experience
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {games.map((game: Game, index: number) => (
            <Reveal key={game.id}>
              <article
                className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10"
                aria-label={game.title}
              >
                {/* Game Image */}
                <div className="relative w-full aspect-video bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <Image
                    src={game.image}
                    alt={`${game.title} cover`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Game Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      {game.technicalSpecs?.release || "Coming Soon"}
                    </div>
                  </div>
                </div>

                {/* Game Content */}
                <div className="p-6 sm:p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                      {game.title}
                    </h3>
                    <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                      {game.description}
                    </p>
                  </div>

                  {/* Game Features Preview */}
                  {game.features && game.features.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white/60 mb-3 uppercase tracking-wider">
                        Key Features
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {game.features.slice(0, 3).map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="inline-block bg-white/10 backdrop-blur-sm text-white/80 text-xs px-3 py-1 rounded-full border border-white/20"
                          >
                            {feature}
                          </span>
                        ))}
                        {game.features.length > 3 && (
                          <span className="inline-block bg-red-500/20 text-red-400 text-xs px-3 py-1 rounded-full border border-red-500/30">
                            +{game.features.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Game Specs */}
                  <div className="mb-6 grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-white/50 block">Platform</span>
                      <span className="text-white font-medium">
                        {game.technicalSpecs?.platform || "PC, Mobile"}
                      </span>
                    </div>
                    <div>
                      <span className="text-white/50 block">Genre</span>
                      <span className="text-white font-medium">
                        {game.technicalSpecs?.genre || "Action, Adventure"}
                      </span>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/games/${game.id}`}
                      className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 group-hover:shadow-lg group-hover:shadow-red-500/25"
                      aria-label={`View details for ${game.title}`}
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16 pt-16 border-t border-white/10">
          <Reveal>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              More Games Coming Soon
            </h3>
          </Reveal>
          <Reveal>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              We are constantly working on new titles and expanding our portfolio. Stay tuned for exciting announcements!
            </p>
          </Reveal>
          <Reveal>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full text-lg border border-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Get in Touch
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </Reveal>
        </div>
      </main>
    </div>
  );
}
