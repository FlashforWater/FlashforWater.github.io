import { Card } from "./Card";
import { getRecentNotes } from "@/lib/notes";

export function NotesCard() {
  const notes = getRecentNotes(3);
  return (
    <Card title="Recent Notes" hint="See all →" href="/notes">
      {notes.length === 0 ? (
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          No notes yet — add your first one in <code className="font-mono text-xs">src/content/notes/</code>.
        </p>
      ) : (
        <ul className="space-y-3">
          {notes.map((n) => (
            <li key={n.slug}>
              <div className="text-sm font-medium">{n.title}</div>
              <div className="mt-0.5 flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                <time>{n.date}</time>
                <span>·</span>
                <span>{n.readingTime} min read</span>
              </div>
              {n.summary && (
                <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2">
                  {n.summary}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
