function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const alignment =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={alignment}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 font-display text-3xl leading-tight text-ink-900 sm:text-4xl lg:text-[2.8rem] dark:text-white">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-ink-700 dark:text-white/72">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
