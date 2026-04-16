import { ArrowRight, CalendarHeart } from "lucide-react";
import Reveal from "../ui/Reveal";
// Replace with Jeremy's professional photo in src/assets/images when available.
import heroPlaceholder from "../../assets/images/hero-placeholder.svg";

function HeroSection() {
  return (
    <section
      id="home"
      className="section-shell relative overflow-hidden pb-20 pt-10 sm:pb-24 sm:pt-14"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <Reveal className="relative z-10">
          <span className="eyebrow">Registered Music Therapist</span>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] text-ink-900 sm:text-6xl lg:text-7xl dark:text-white">
            Music Therapy for Connection, Growth &amp; Wellbeing
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-700 dark:text-white/72">
            Supporting individuals across disability, mental health, early
            development and aged care with personalised, relationship-centered
            music therapy.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-ocean-700 dark:bg-ocean-500 dark:hover:bg-ocean-400"
            >
              <CalendarHeart size={18} aria-hidden="true" />
              Book a Session
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sand-200 bg-white/75 px-6 py-3.5 text-sm font-semibold text-ink-900 transition hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-ocean-300/40"
            >
              Learn More
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              "NDIS-informed support",
              "Home, clinic, and group sessions",
              "Collaborative allied health approach",
            ].map((item) => (
              <div
                key={item}
                className="glass-panel rounded-[1.6rem] px-5 py-4 text-sm font-medium text-ink-800 dark:text-white/82"
              >
                {item}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative mx-auto max-w-xl">
            <div className="absolute -left-8 top-8 h-28 w-28 rounded-full bg-sky-200/55 blur-2xl dark:bg-sky-400/20" />
            <div className="absolute -right-6 bottom-10 h-36 w-36 rounded-full bg-ocean-200/70 blur-2xl dark:bg-ocean-400/20" />
            <div className="glass-panel relative overflow-hidden rounded-[2.5rem] p-4">
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/70 to-transparent dark:from-white/8" />
              <img
                src={heroPlaceholder}
                alt="Placeholder portrait for Jeremy Yau"
                className="h-full w-full rounded-[2rem] object-cover"
              />
            </div>
            <div className="glass-panel absolute -bottom-6 left-4 max-w-[16rem] rounded-[1.75rem] p-5">
              <p className="text-sm font-semibold text-ink-900 dark:text-white">
                Personalised therapy for children, adults, families, and care
                teams.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default HeroSection;
