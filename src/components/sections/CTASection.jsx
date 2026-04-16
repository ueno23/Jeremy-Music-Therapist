import { ArrowRight } from "lucide-react";
import Reveal from "../ui/Reveal";

function CTASection() {
  return (
    <section className="section-shell py-20 sm:py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.8rem] bg-ink-900 px-6 py-12 text-white sm:px-8 lg:px-12 lg:py-14">
          <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(128,195,192,0.28),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(114,174,202,0.25),transparent_28%)]" />
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ocean-100">
                Start Here
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-[2.7rem]">
                Start Your Music Therapy Journey Today
              </h2>
              <p className="mt-4 max-w-xl text-base leading-8 text-white/76">
                Whether you are a parent, support coordinator, healthcare
                professional, or private client, Jeremy can help you explore the
                right next step.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink-900 transition hover:-translate-y-0.5 hover:bg-sand-100"
            >
              Book a Session
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default CTASection;
