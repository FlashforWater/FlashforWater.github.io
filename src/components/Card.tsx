import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  title?: string;
  hint?: string;
  href?: string;
};

export function Card({ children, className = "", title, hint, href }: CardProps) {
  const content = (
    <div
      className={`group relative h-full rounded-2xl border border-zinc-200 bg-white p-5 transition-all hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 ${className}`}
    >
      {(title || hint) && (
        <div className="mb-3 flex items-center justify-between">
          {title && (
            <h3 className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              {title}
            </h3>
          )}
          {hint && (
            <span className="text-xs text-zinc-400 dark:text-zinc-500">{hint}</span>
          )}
        </div>
      )}
      {children}
    </div>
  );

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="block h-full"
      >
        {content}
      </a>
    );
  }
  return content;
}
