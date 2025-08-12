import Image from "next/image";

export default function ContactPage() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/company/eka-corp",
      label: "LinkedIn",
      icon: "/images/linkedin.svg",
    },
    {
      href: "https://play.google.com/store/apps/dev?id=eka-corp",
      label: "Play Store",
      icon: "/images/playstore.svg",
    },
    {
      href: "https://www.youtube.com/@ekacorp",
      label: "YouTube",
      icon: "/images/youtube.svg",
    },
  ];

  return (
    <div className="bg-[var(--color-navy)] text-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <header
        className="w-full flex flex-col items-center justify-center text-center py-16 px-4 sm:py-24 sm:px-8 bg-[var(--color-primary)]"
        aria-label="Contact Eka Corp Hero"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">Contact Us</h1>
        <p className="text-lg sm:text-2xl font-medium text-white/90">We would love to hear from you</p>
      </header>

      {/* Content Section */}
      <main className="w-full max-w-6xl mx-auto px-4 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <section aria-labelledby="contact-form-heading" className="bg-white text-[var(--color-navy)] rounded-xl p-6 sm:p-8 shadow-lg">
          <h2 id="contact-form-heading" className="text-2xl font-bold mb-6">Send us a message</h2>

          <form
            action="https://formspree.io/f/placeholder"
            method="POST"
            className="space-y-5"
            aria-label="Contact form"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg bg-[var(--color-light)] border border-[color-mix(in_oklab,var(--color-navy)_10%,white)] px-4 py-3 text-[var(--color-navy)] placeholder-[color-mix(in_oklab,var(--color-navy)_50%,white)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                placeholder="Your name"
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg bg-[var(--color-light)] border border-[color-mix(in_oklab,var(--color-navy)_10%,white)] px-4 py-3 text-[var(--color-navy)] placeholder-[color-mix(in_oklab,var(--color-navy)_50%,white)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                placeholder="you@example.com"
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full rounded-lg bg-[var(--color-light)] border border-[color-mix(in_oklab,var(--color-navy)_10%,white)] px-4 py-3 text-[var(--color-navy)] placeholder-[color-mix(in_oklab,var(--color-navy)_50%,white)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                placeholder="How can we help?"
                aria-required="true"
              />
            </div>

            <div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] text-white font-semibold px-6 py-3 shadow-md hover:bg-[var(--color-purple)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>

        {/* Contact Info */}
        <aside aria-labelledby="contact-info-heading" className="space-y-6">
          <h2 id="contact-info-heading" className="text-2xl font-bold">Contact Information</h2>

          <address className="not-italic text-[color-mix(in_oklab,var(--color-navy)_74%,white)] bg-white/5 rounded-xl p-6 shadow-lg">
            <p className="mb-2">
              <span className="text-white">Email:</span>{" "}
              <a href="mailto:contact@ekacorp.example" className="text-[var(--color-accent)] hover:underline">contact@ekacorp.example</a>
            </p>
            <p className="mb-0">
              <span className="text-white">Address:</span>{" "}
              123 Studio Lane, Suite 200, Game City, GC 00000
            </p>
          </address>

          <div className="bg-white/5 rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Follow us</h3>
            <nav aria-label="Social media" className="flex gap-5">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] rounded-full"
                >
                  <Image
                    src={link.icon}
                    alt={link.label + " icon"}
                    width={28}
                    height={28}
                    className="object-contain"
                    priority
                  />
                </a>
              ))}
            </nav>
          </div>
        </aside>
      </main>
    </div>
  );
}


