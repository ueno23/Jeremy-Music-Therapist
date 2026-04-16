function ServiceCard({ icon: Icon, title, description }) {
  return (
    <article className="glass-panel group h-full rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(36,95,99,0.12)] dark:hover:shadow-[0_22px_60px_rgba(0,0,0,0.3)]">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ocean-50 text-ocean-700 transition duration-300 group-hover:bg-ocean-500 group-hover:text-white dark:bg-white/8 dark:text-ocean-100 dark:group-hover:bg-ocean-500">
        <Icon size={26} strokeWidth={1.9} aria-hidden="true" />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-ink-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-ink-700 dark:text-white/72">
        {description}
      </p>
    </article>
  );
}

export default ServiceCard;
