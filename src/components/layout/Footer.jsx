const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer className="section-shell pb-8 pt-6">
      <div className="glass-panel rounded-[2rem] px-6 py-8 sm:px-8">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl text-ink-900 dark:text-white">
              Jeremy Yau Music Therapy
            </p>
            <p className="mt-4 max-w-md text-sm leading-7 text-ink-700 dark:text-white/70">
              Warm, evidence-informed music therapy for connection, growth, and
              wellbeing across disability, mental health, early development, and
              aged care.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-700 dark:text-white/55">
              Quick Links
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-ink-800 transition hover:text-ocean-700 dark:text-white/80 dark:hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink-700 dark:text-white/55">
              Contact
            </p>
            <div className="mt-4 space-y-3 text-sm text-ink-800 dark:text-white/80">
              <p>0413 548 223</p>
              <a href="mailto:jeremyyyau@hotmail.com">jeremyyyau@hotmail.com</a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-sand-200 pt-5 text-sm text-ink-700 dark:border-white/10 dark:text-white/55">
          Copyright {new Date().getFullYear()} Jeremy Yau Music Therapy. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
