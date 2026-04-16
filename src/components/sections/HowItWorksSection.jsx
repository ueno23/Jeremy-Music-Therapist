import { ClipboardPenLine, ListChecks, Music4 } from "lucide-react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

const steps = [
  {
    title: "Initial Consultation",
    description:
      "Discuss needs, goals, referrals, supports, and whether music therapy is the right fit.",
    icon: ClipboardPenLine,
  },
  {
    title: "Personalised Therapy Plan",
    description:
      "Create a clear therapy approach tailored to the client’s goals, strengths, communication style, and context.",
    icon: ListChecks,
  },
  {
    title: "Ongoing Sessions & Progress Tracking",
    description:
      "Deliver meaningful sessions with reflection, collaboration, and progress monitoring over time.",
    icon: Music4,
  },
];

function HowItWorksSection() {
  return (
    <section className="section-shell py-20 sm:py-24">
      <div className="glass-panel rounded-[2.8rem] px-6 py-10 sm:px-8 lg:px-12 lg:py-14">
        <Reveal>
          <SectionHeading
            eyebrow="How It Works"
            title="A simple, supportive process from first contact to ongoing care"
            description="Whether Jeremy is supporting a child, adult, family, or referral network, the process stays clear, collaborative, and person-centred."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.title} delay={index * 0.08}>
                <article className="rounded-[2rem] border border-sand-200 bg-white/75 p-6 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 dark:bg-sky-400/15 dark:text-sky-100">
                      <Icon size={24} aria-hidden="true" />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-[0.16em] text-ink-700 dark:text-white/55">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-ink-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-ink-700 dark:text-white/72">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
