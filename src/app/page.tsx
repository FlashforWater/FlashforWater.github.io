import { Hero } from "@/components/Hero";
import { GitHubCard } from "@/components/GitHubCard";
import { LearningCard } from "@/components/LearningCard";
import { ProjectsCard } from "@/components/ProjectsCard";
import { NotesCard } from "@/components/NotesCard";
import { ContactCard } from "@/components/ContactCard";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <Hero />
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-min">
        <div className="lg:col-span-2 lg:row-span-2">
          <GitHubCard />
        </div>
        <LearningCard />
        <ProjectsCard />
        <NotesCard />
        <div className="sm:col-span-2 lg:col-span-3">
          <ContactCard />
        </div>
      </div>
      <footer className="mt-16 text-center text-xs text-zinc-500 dark:text-zinc-400">
        Built with Next.js · Hosted on GitHub Pages
      </footer>
    </main>
  );
}
