import { site } from "@/config/site";

export function Hero() {
  return (
    <section className="mb-8">
      <div className="flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        Available for new opportunities
      </div>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
        {site.name}
      </h1>
      <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
        {site.role}
      </p>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        {site.bio}
      </p>
    </section>
  );
}
