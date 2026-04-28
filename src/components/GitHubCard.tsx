import { Card } from "./Card";
import { site } from "@/config/site";

export function GitHubCard() {
  const url = `https://github.com/${site.github}`;
  return (
    <Card title="GitHub" hint="Last 12 months" href={url}>
      <div className="flex items-center gap-3">
        <svg
          viewBox="0 0 24 24"
          className="h-8 w-8 fill-current"
          aria-hidden="true"
        >
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.45.11-3.03 0 0 .96-.31 3.16 1.18a10.96 10.96 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.58.23 2.74.11 3.03.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
        </svg>
        <div className="flex-1 min-w-0">
          <div className="font-medium">@{site.github}</div>
          <div className="text-sm text-zinc-500 dark:text-zinc-400 truncate">
            {url.replace("https://", "")}
          </div>
        </div>
      </div>
      <img
        src={`https://ghchart.rshah.org/27272a/${site.github}`}
        alt="GitHub contributions"
        className="mt-4 w-full opacity-90 dark:invert"
        loading="lazy"
      />
    </Card>
  );
}
