export function RichText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-zinc-900 dark:text-zinc-50">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}
