import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

// Temporary import of games data (replace with dynamic import/fetch if needed)
import gamesData from "@/data/games.json";

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

export default function Home() {
  const allGames = gamesData as Game[];
  // Get only Capsule Carnage as featured
  const featuredGames = allGames.filter(game => game.title === "Capsule Carnage");

  return (
    <div className="bg-darkNavy text-white min-h-screen flex flex-col font-sans">
      {/* Hero Section */}
      <header className="w-full text-center py-16 px-4 sm:py-24 sm:px-8 bg-[var(--color-primary)]" aria-label="Eka Corp Hero">
        <Reveal>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight text-white drop-shadow-lg">
            Eka Corp
          </h1>
        </Reveal>
        <Reveal>
          <p className="text-lg sm:text-2xl font-medium mb-8 text-white/90">
            Crafting Games That Inspire
          </p>
        </Reveal>
        <Reveal>
          <Link
            href="/games"
            className="cta-btn inline-block rounded-full bg-[var(--color-accent)] text-white font-semibold px-8 py-3 text-base sm:text-lg shadow-md hover:bg-[var(--color-purple)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2"
          >
            View Our Games
          </Link>
        </Reveal>
      </header>

      {/* Featured Game Section - Professional Game Studio Style */}
      <section
        className="w-full max-w-7xl mx-auto px-4 py-16 sm:py-20"
        aria-labelledby="featured-game-heading"
      >
        {featuredGames.map((game: Game) => (
          <div key={game.id} className="space-y-12">
            {/* Game Title and Description */}
            <div className="text-center">
              <Reveal>
        <h2
                  id="featured-game-heading"
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white"
        >
                  Featured Game
        </h2>
              </Reveal>
              <Reveal>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-red-500">
                  {game.title}
                </h3>
              </Reveal>
              <Reveal>
                <p className="text-lg sm:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                  {game.description}
                </p>
              </Reveal>
            </div>

            {/* Hero Image and Video Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Hero Image */}
              <Reveal>
                <div className="relative group">
                  <div className="relative w-full aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={game.image}
                      alt={`${game.title} hero image`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {game.technicalSpecs?.release || "Coming Soon"}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* YouTube Video */}
              <Reveal>
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-white mb-4">Gameplay Trailer</h4>
                  <div className="relative w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
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
                      <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white/60">
                        <div className="text-center">
                          <div className="text-4xl mb-2">🎮</div>
                          <p>Video coming soon</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Game Features */}
                  {game.features && (
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                      <h5 className="text-lg font-semibold mb-4 text-white">Key Features</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {game.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                            <span className="text-white/80 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Game Details and Screenshots */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Game Info */}
              <div className="lg:col-span-1">
                <Reveal>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 h-full">
                    <h4 className="text-xl font-semibold mb-4 text-white">Game Details</h4>
                    <div className="space-y-4 text-sm">
                      <div>
                        <span className="text-white/50 block">Platforms</span>
                        <span className="text-white font-medium">{game.technicalSpecs?.platform || "PC, Mobile"}</span>
                      </div>
                      <div>
                        <span className="text-white/50 block">Release Date</span>
                        <span className="text-white font-medium">{game.technicalSpecs?.release || "Coming Soon"}</span>
                      </div>
                      <div>
                        <span className="text-white/50 block">Genre</span>
                        <span className="text-white font-medium">{game.technicalSpecs?.genre || "Action, Adventure"}</span>
                      </div>
                      <div>
                        <span className="text-white/50 block">Engine</span>
                        <span className="text-white font-medium">{game.technicalSpecs?.engine || "Custom Built"}</span>
                      </div>
                      {game.technicalSpecs?.graphics && (
                        <div>
                          <span className="text-white/50 block">Graphics</span>
                          <span className="text-white font-medium">{game.technicalSpecs.graphics}</span>
                        </div>
                      )}
                      {game.technicalSpecs?.audio && (
                        <div>
                          <span className="text-white/50 block">Audio</span>
                          <span className="text-white font-medium">{game.technicalSpecs.audio}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Screenshots Grid */}
              <div className="lg:col-span-2">
                <Reveal>
                  <h4 className="text-xl font-semibold text-white mb-4">Screenshots</h4>
                </Reveal>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {(game.screenshots || [1, 2, 3, 4, 5, 6]).map((screenshot, index) => (
                    <Reveal key={index}>
                      <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden group cursor-pointer">
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
              </div>
            </div>

            {/* Call to Action */}
            <Reveal>
              <div className="text-center pt-8">
                <Link
                  href={`/games/${game.id}`}
                  className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  Learn More About {game.title}
              </Link>
              </div>
            </Reveal>
          </div>
          ))}
      </section>

      {/* About Preview Section */}
      <section
        className="w-full max-w-3xl mx-auto px-4 py-10 sm:py-14 flex flex-col items-center text-center"
        aria-labelledby="about-heading"
      >
        <Reveal>
          <h2 id="about-heading" className="text-2xl sm:text-3xl font-bold mb-4 text-white">
            About Eka Corp
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-base sm:text-lg text-white/90 mb-6">
            We are passionate creators dedicated to building games that spark imagination, foster connection, and inspire players worldwide.
          </p>
        </Reveal>
        <Reveal>
          <Link
            href="/about"
            className="cta-btn inline-block rounded-full border-2 border-accentBlue text-accentBlue font-semibold px-7 py-2 text-base hover:bg-accentPurple hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accentBlue focus:ring-offset-2"
          >
            Learn More
          </Link>
        </Reveal>
      </section>

      {/* Footer moved to global layout */}
    </div>
  );
}
