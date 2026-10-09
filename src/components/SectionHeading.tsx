type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl sm:mb-14">
      <p className="text-sm font-medium tracking-[0.18em] text-[var(--accent)] uppercase">{eyebrow}</p>
      <h2
        id={id}
        className="mt-3 font-display text-3xl font-medium tracking-tight text-[var(--text)] sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-xl text-pretty text-lg leading-relaxed text-[var(--text-muted)]">{description}</p>
      )}
    </div>
  );
}
