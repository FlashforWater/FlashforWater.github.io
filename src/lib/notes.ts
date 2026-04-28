import fs from "node:fs";
import path from "node:path";

export type Note = {
  slug: string;
  title: string;
  date: string;
  summary?: string;
  readingTime: number;
  content: string;
};

const NOTES_DIR = path.join(process.cwd(), "src/content/notes");

function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };
  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const m = line.match(/^([a-zA-Z][\w-]*):\s*(.*)$/);
    if (m) meta[m[1]] = m[2].replace(/^["']|["']$/g, "").trim();
  }
  return { meta, body: match[2] };
}

function loadAll(): Note[] {
  if (!fs.existsSync(NOTES_DIR)) return [];
  const files = fs.readdirSync(NOTES_DIR).filter((f) => f.endsWith(".md"));
  const notes = files.map((file): Note => {
    const raw = fs.readFileSync(path.join(NOTES_DIR, file), "utf8");
    const { meta, body } = parseFrontmatter(raw);
    const slug = file.replace(/\.md$/, "");
    const words = body.split(/\s+/).length;
    return {
      slug,
      title: meta.title ?? slug,
      date: meta.date ?? "",
      summary: meta.summary,
      readingTime: Math.max(1, Math.round(words / 200)),
      content: body,
    };
  });
  return notes.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllNotes(): Note[] {
  return loadAll();
}

export function getRecentNotes(limit = 3): Note[] {
  return loadAll().slice(0, limit);
}

export function getNote(slug: string): Note | undefined {
  return loadAll().find((n) => n.slug === slug);
}
