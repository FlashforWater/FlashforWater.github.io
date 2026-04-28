import Link from "next/link";
import { getAllNotes } from "@/lib/notes";

export const metadata = { title: "Notes" };

export default function NotesIndex() {
  const notes = getAllNotes();
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
      <Link
        href="/"
        className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        ← back
      </Link>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">Notes</h1>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Paper readings and learning notes.
      </p>
      <ul className="mt-10 divide-y divide-zinc-200 dark:divide-zinc-800">
        {notes.map((n) => (
          <li key={n.slug}>
            <Link
              href={`/notes/${n.slug}`}
              className="group flex flex-col gap-1 py-5"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-base font-medium group-hover:underline underline-offset-4">
                  {n.title}
                </h2>
                <span className="text-xs tabular-nums text-zinc-500 dark:text-zinc-400">
                  {n.date}
                </span>
              </div>
              {n.summary && (
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {n.summary}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
