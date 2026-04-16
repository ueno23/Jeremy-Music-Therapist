import { Quote } from "lucide-react";

function TestimonialCard({ quote, name, role }) {
  return (
    <article className="glass-panel rounded-[2rem] p-6 md:p-7">
      <Quote className="text-sky-400" size={28} aria-hidden="true" />
      <p className="mt-5 text-base leading-8 text-ink-800 dark:text-white/80">
        {quote}
      </p>
      <div className="mt-6 border-t border-sand-200 pt-4 dark:border-white/10">
        <p className="font-semibold text-ink-900 dark:text-white">{name}</p>
        <p className="text-sm text-ink-700 dark:text-white/60">{role}</p>
      </div>
    </article>
  );
}

export default TestimonialCard;
