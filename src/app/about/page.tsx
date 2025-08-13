import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function AboutPage() {
  const team = [
    { id: "t1", name: "User A", role: "Founder & Developer", image: "/images/team-1.svg" },
  ];

  return (
    <div className="bg-darkNavy text-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="w-full flex flex-col items-center justify-center text-center py-16 px-4 sm:py-24 sm:px-8 bg-[var(--color-primary)]" aria-label="About Eka Corp Hero">
        <Reveal>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">About Eka Corp</h1>
        </Reveal>
        <Reveal>
          <p className="text-lg sm:text-2xl font-medium text-white/90">Crafting Games That Inspire</p>
        </Reveal>
      </header>

      {/* Mission Section */}
      <section
        className="w-full max-w-4xl mx-auto px-4 py-10 sm:py-14"
        aria-labelledby="mission-heading"
      >
        <Reveal>
        <h2 id="mission-heading" className="text-2xl sm:text-3xl font-bold mb-4 text-white">Our Mission</h2>
        </Reveal>
        <Reveal>
          <p className="text-base sm:text-lg text-white/90 leading-8">
            We are passionate creators dedicated to building games that spark imagination, foster
            connection, and inspire players worldwide. Our studio blends thoughtful design,
            expressive art, and innovative technology to craft memorable interactive experiences.
          </p>
        </Reveal>
      </section>

      {/* Team Section */}
      <section
        className="w-full max-w-6xl mx-auto px-4 pb-16"
        aria-labelledby="team-heading"
      >
        <h2 id="team-heading" className="text-2xl sm:text-3xl font-bold mb-8">Our Team</h2>

        <div className="flex justify-center">
          <div className="max-w-md">
            {team.map((member) => (
              <Reveal key={member.id}>
                <article
                  className="card bg-white text-[var(--color-navy)] rounded-xl shadow-lg overflow-hidden p-6 flex flex-col items-center text-center focus-within:ring-2 focus-within:ring-[var(--color-accent)]"
                  aria-label={`${member.name}, ${member.role}`}
                >
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4">
                    <Image
                      src={member.image}
                      alt={`${member.name} portrait`}
                      fill
                      sizes="(max-width: 640px) 112px, 128px"
                      className="object-cover rounded-full bg-[var(--color-light)]"
                      priority
                    />
                  </div>
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-[color-mix(in_oklab,var(--color-navy)_74%,white)]">{member.role}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


