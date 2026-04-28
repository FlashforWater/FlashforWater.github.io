import { Card } from "./Card";
import { site } from "@/config/site";

export function ProjectsCard() {
  return (
    <Card title="Projects">
      <ul className="space-y-4">
        {site.projects.map((p) => {
          const external = p.href.startsWith("http");
          return (
            <li key={p.name}>
              <a
                href={p.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group block"
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium group-hover:underline underline-offset-4">
                    {p.name}
                  </div>
                  <svg
                    className="h-3.5 w-3.5 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </div>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                  {p.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-zinc-200 px-2 py-0.5 text-[10px] font-medium text-zinc-600 dark:border-zinc-700 dark:text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
