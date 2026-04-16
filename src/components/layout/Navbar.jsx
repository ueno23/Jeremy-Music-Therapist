import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "../ui/ThemeToggle";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Navbar({ isDark, onThemeToggle }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shellClasses = isScrolled
    ? "border-white/50 bg-white/88 shadow-[0_14px_42px_rgba(36,95,99,0.1)] backdrop-blur-xl dark:border-white/10 dark:bg-[#112630]/88"
    : "border-transparent bg-transparent";

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition duration-300 sm:px-6 ${shellClasses}`}
      >
        <a
          href="#home"
          className="max-w-[13rem] text-sm font-semibold leading-5 text-ink-900 dark:text-white sm:max-w-none sm:text-base"
          aria-label="Jeremy Yau Music Therapy home"
        >
          Jeremy Yau Music Therapy
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-ink-800 transition hover:text-ocean-700 dark:text-white/80 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
          <a
            href="#contact"
            className="rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-ocean-700 dark:bg-ocean-500 dark:hover:bg-ocean-400"
          >
            Book a Session
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand-200 bg-white/80 text-ink-900 dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="section-shell lg:hidden">
          <div className="glass-panel mt-3 rounded-[2rem] p-5">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-ink-900 transition hover:bg-sand-100 dark:text-white dark:hover:bg-white/6"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 rounded-2xl bg-ink-900 px-4 py-3 text-center text-sm font-semibold text-white dark:bg-ocean-500"
                onClick={() => setIsOpen(false)}
              >
                Book a Session
              </a>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
