import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
}

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent-hover border-transparent shadow-lg shadow-amber/20",
  secondary:
    "bg-surface-dark text-white hover:bg-charcoal-light border-transparent",
  outline:
    "bg-transparent text-foreground border-amber hover:bg-amber hover:text-white",
  ghost:
    "bg-transparent text-foreground hover:text-accent border-transparent",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  external = false,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 border font-medium tracking-wide uppercase transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={baseClasses}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
