import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-navy)] border-t border-white/10 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
        <span className="text-sm opacity-80 text-center">&copy; {new Date().getFullYear()} Eka Corp. All rights reserved.</span>
        <nav aria-label="Social media" className="flex gap-5">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] rounded-full"
          >
            <Image src="/images/linkedin.svg" alt="LinkedIn icon" width={28} height={28} className="object-contain" priority />
          </a>
          <a
            href="https://play.google.com/store/apps/developer?id=NV2a+Games"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Play Store"
            className="hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] rounded-full"
          >
            <Image src="/images/playstore.svg" alt="Play Store icon" width={28} height={28} className="object-contain" priority />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] rounded-full"
          >
            <Image src="/images/youtube.svg" alt="YouTube icon" width={28} height={28} className="object-contain" priority />
          </a>
        </nav>
      </div>
    </footer>
  );
}


