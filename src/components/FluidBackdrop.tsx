type FluidBackdropProps = {
  variant?: "hero" | "section" | "shore";
  className?: string;
};

export function FluidBackdrop({ variant = "section", className = "" }: FluidBackdropProps) {
  if (variant === "hero") {
    return (
      <div aria-hidden="true" className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
        <div className="tide-layer absolute inset-0">
          <div className="organic-blob tide-pulse absolute -left-[18%] -top-[20%] size-[min(70vw,32rem)] bg-[radial-gradient(circle_at_30%_30%,var(--wash-a),transparent_70%)] blur-2xl" />
          <div className="organic-blob-slow absolute -right-[12%] top-[8%] size-[min(60vw,28rem)] bg-[radial-gradient(circle_at_60%_40%,var(--wash-b),transparent_68%)] blur-3xl" />
          <div className="organic-blob absolute bottom-[-10%] left-[20%] size-[min(55vw,24rem)] bg-[radial-gradient(circle_at_50%_50%,var(--wash-c),transparent_70%)] blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,var(--surface)_100%)]" />
      </div>
    );
  }

  if (variant === "shore") {
    return (
      <div aria-hidden="true" className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
        <div className="tide-layer absolute inset-0">
          <div className="organic-blob-slow absolute left-1/2 top-1/2 size-[min(90vw,40rem)] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,var(--wash-a),var(--wash-b)_45%,transparent_70%)] blur-2xl" />
          <div className="organic-blob absolute -bottom-[20%] -left-[10%] size-[min(50vw,22rem)] bg-[radial-gradient(circle,var(--wash-c),transparent_70%)] blur-3xl" />
        </div>
      </div>
    );
  }

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <div className="tide-layer absolute inset-0">
        <div className="organic-blob absolute -right-[8%] top-[10%] size-[min(40vw,18rem)] bg-[radial-gradient(circle,var(--wash-d),transparent_70%)] blur-3xl" />
        <div className="organic-blob-slow absolute -left-[6%] bottom-[5%] size-[min(36vw,16rem)] bg-[radial-gradient(circle,var(--wash-b),transparent_70%)] blur-3xl" />
      </div>
    </div>
  );
}
