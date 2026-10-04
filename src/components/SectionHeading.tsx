type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl sm:mb-12">
      <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
        {eyebrow}
      </p>
      <h2 id={id} className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
        {title}
      </h2>
      {description && <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">{description}</p>}
    </div>
  );
}
