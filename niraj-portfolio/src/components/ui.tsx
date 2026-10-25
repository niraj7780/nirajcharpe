"use client";

import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export { cn };

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const base = "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    const variants: Record<Variant, string> = {
      primary: "bg-accent text-fg hover:bg-accent-hover border border-accent-border",
      secondary: "bg-bg-elevated text-fg hover:bg-border border border-border",
      ghost: "text-fg-muted hover:text-fg hover:bg-border",
      outline: "border border-border hover:border-border-strong bg-transparent",
    };
    const sizes: Record<Size, string> = {
      sm: "px-3 py-1.5 text-sm gap-1.5",
      md: "px-4 py-2 text-base gap-2",
      lg: "px-6 py-3 text-lg gap-2.5",
    };
    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const base = "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";
    const variants: Record<Variant, string> = {
      primary: "bg-accent text-fg hover:bg-accent-hover border border-accent-border",
      secondary: "bg-bg-elevated text-fg hover:bg-border border border-border",
      ghost: "text-fg-muted hover:text-fg hover:bg-border",
      outline: "border border-border hover:border-border-strong bg-transparent",
    };
    const sizes: Record<Size, string> = {
      sm: "px-3 py-1.5 text-sm gap-1.5",
      md: "px-4 py-2 text-base gap-2",
      lg: "px-6 py-3 text-lg gap-2.5",
    };
    return (
      <a
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </a>
    );
  }
);
LinkButton.displayName = "LinkButton";

export const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("bg-bg-elevated border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-border-strong hover:shadow-md", className)}
      {...props}
    >
      {children}
    </div>
  )
);
Card.displayName = "Card";

export const CardHeader = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("px-6 py-5 border-b border-border", className)} {...props}>
      {children}
    </div>
  )
);
CardHeader.displayName = "CardHeader";

export const CardContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("px-6 py-5", className)} {...props}>
      {children}
    </div>
  )
);
CardContent.displayName = "CardContent";

export const CardFooter = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("px-6 py-4 border-t border-border bg-bg", className)} {...props}>
      {children}
    </div>
  )
);
CardFooter.displayName = "CardFooter";

export const Badge = ({ children, variant = "default", className }: { children: React.ReactNode; variant?: "default" | "accent" | "blue"; className?: string }) => {
  const variants: Record<"default" | "accent" | "blue", string> = {
    default: "bg-border text-fg-muted border border-border",
    accent: "bg-accent-subtle text-accent-strong border border-accent-border",
    blue: "bg-blue-subtle text-blue border border-blue-border",
  };
  return (
    <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium", variants[variant], className)}>
      {children}
    </span>
  );
};

export const SectionHeader = ({ label, title, description, className }: { label: string; title: string; description?: string; className?: string }) => (
  <header className={cn("max-w-5xl mx-auto px-6 mb-12", className)}>
    <span className="inline-block px-3 py-1 text-xs font-mono font-medium text-fg-muted bg-border rounded mb-4 tracking-wider uppercase">{label}</span>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-fg tracking-tight leading-tight mb-4">{title}</h2>
    {description && <p className="text-lg text-fg-muted max-w-2xl leading-relaxed">{description}</p>}
  </header>
);

export const Container = ({ children, className, size = "lg" }: { children: React.ReactNode; className?: string; size?: "sm" | "md" | "lg" | "xl" }) => {
  const sizes: Record<"sm" | "md" | "lg" | "xl", string> = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
  };
  return <div className={cn("mx-auto px-6", sizes[size], className)}>{children}</div>;
};

export const Divider = ({ className }: { className?: string }) => (
  <hr className={cn("border-t border-border my-12", className)} />
);

interface TagProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href?: string;
  variant?: "default" | "outline";
  className?: string;
}

export const Tag = ({ children, href, variant = "default", className, ...rest }: TagProps) => {
  const Component = href ? "a" : "span";
  const variants: Record<"default" | "outline", string> = {
    default: "inline-flex items-center px-2.5 py-1 text-xs font-mono font-medium text-fg-muted bg-border rounded border border-border hover:border-border-strong hover:text-fg transition-colors",
    outline: "inline-flex items-center px-2.5 py-1 text-xs font-mono font-medium text-fg-muted bg-transparent border border-border hover:border-border-strong hover:text-fg transition-colors",
  };
  return (
    <Component
      href={href}
      className={cn(variants[variant], className)}
      {...rest}
    >
      {children}
    </Component>
  );
};
