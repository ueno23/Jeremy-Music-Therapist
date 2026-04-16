import { BadgeCheck, BriefcaseBusiness, GraduationCap } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import jeremySessionGroup from "../../assets/images/jeremy-session-group.JPG";

const credentials = [
  "Registered Music Therapist (RMT)",
  "Master of Music Therapy - University of Melbourne",
  "Bachelor of Music (Performance)",
];

const highlights = [
  "Nordoff Robbins Music Therapy (2021-2025)",
  "KITA Speech & Music Therapy (2022-Present)",
  "Experience in hospitals, disability, early intervention, and aged care",
];

const bulletPoints = [
  "Works with NDIS clients",
  "Collaborates with allied health professionals",
  "Delivers individual and group sessions",
];

function ExperienceSection() {
  return (
    <section id="experience" className="section-shell py-20 sm:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="glass-panel h-full rounded-[2.6rem] p-8">
            <SectionHeading
              eyebrow="Experience"
              title="Trusted training, broad clinical experience, and collaborative care"
              description="Jeremy brings formal music therapy training together with hands-on experience across disability, mental health, early intervention, hospitals, and aged care."
            />

            <div className="mt-8 space-y-4">
              {credentials.map((credential) => (
                <div
                  key={credential}
                  className="flex items-start gap-4 rounded-[1.6rem] border border-sand-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-ocean-50 text-ocean-700 dark:bg-ocean-500/15 dark:text-ocean-100">
                    <GraduationCap size={20} aria-hidden="true" />
                  </div>
                  <p className="text-sm font-medium leading-7 text-ink-800 dark:text-white/80">
                    {credential}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="glass-panel h-full rounded-[2.6rem] p-8">
            <div className="grid gap-5">
              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src={jeremySessionGroup}
                  alt="Jeremy Yau facilitating a group music therapy session"
                  className="h-72 w-full object-cover object-[center_18%]"
                />
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <BriefcaseBusiness className="text-sky-700 dark:text-sky-100" />
                  <h3 className="text-2xl font-semibold text-ink-900 dark:text-white">
                    Experience Highlights
                  </h3>
                </div>
                <div className="mt-5 space-y-4">
                  {highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="rounded-[1.5rem] bg-sky-100/75 px-5 py-4 text-sm font-medium leading-7 text-sky-700 dark:bg-sky-400/10 dark:text-sky-100"
                    >
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-sand-200 bg-white/75 p-6 dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center gap-3">
                  <BadgeCheck className="text-ocean-700 dark:text-ocean-100" />
                  <h4 className="text-lg font-semibold text-ink-900 dark:text-white">
                    Practice Snapshot
                  </h4>
                </div>
                <ul className="mt-5 space-y-3">
                  {bulletPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-7 text-ink-800 dark:text-white/80"
                    >
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-ocean-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ExperienceSection;
