import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
// Replace with Jeremy's friendly portrait in src/assets/images when available.
import portraitPlaceholder from "../../assets/images/portrait-placeholder.svg";

const focusAreas = [
  "Adult disability support",
  "Mental health and emotional wellbeing",
  "Early childhood development",
  "Aged care and life enrichment",
];

const instruments = [
  "Voice",
  "Guitar",
  "Piano",
  "Percussion",
  "Clarinet",
  "Chinese flute (dizi)",
];

function AboutSection() {
  return (
    <section id="about" className="section-shell py-20 sm:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="relative mx-auto max-w-lg">
            <div className="glass-panel overflow-hidden rounded-[2.5rem] p-4">
              <img
                src={portraitPlaceholder}
                alt="Placeholder friendly portrait for Jeremy Yau"
                className="h-full w-full rounded-[2rem] object-cover"
              />
            </div>
            <div className="glass-panel absolute -bottom-6 right-4 rounded-[1.6rem] px-5 py-4">
              <p className="text-sm font-semibold text-ink-900 dark:text-white">
                Master of Music Therapy, University of Melbourne
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <SectionHeading
            eyebrow="About Jeremy"
            title="Grounded, responsive music therapy that meets people where they are"
            description="Jeremy is a Registered Music Therapist (RMT) with a Master of Music Therapy from the University of Melbourne. He works with warmth, curiosity, and clinical care to help people build connection, communication, regulation, expression, and quality of life."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <div
                key={area}
                className="rounded-[1.6rem] border border-sand-200 bg-white/65 px-5 py-4 text-sm font-medium text-ink-800 dark:border-white/10 dark:bg-white/5 dark:text-white/82"
              >
                {area}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-sand-200 bg-white/70 p-6 dark:border-white/10 dark:bg-white/5">
            <p className="text-sm uppercase tracking-[0.18em] text-ink-700 dark:text-white/55">
              Instruments and facilitation
            </p>
            <p className="mt-3 text-base leading-8 text-ink-700 dark:text-white/72">
              Jeremy draws on a flexible range of instruments to shape each
              session around therapeutic goals and the person in front of him.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {instruments.map((instrument) => (
                <span
                  key={instrument}
                  className="rounded-full bg-ocean-50 px-4 py-2 text-sm font-semibold text-ocean-700 dark:bg-ocean-500/15 dark:text-ocean-100"
                >
                  {instrument}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default AboutSection;
