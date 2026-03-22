interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <h2
        className={`font-display text-3xl font-light tracking-tight sm:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-lg leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          } ${dark ? "text-white/70" : "text-muted"}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-px w-16 bg-accent ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
