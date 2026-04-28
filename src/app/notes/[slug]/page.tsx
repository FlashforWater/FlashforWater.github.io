import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllNotes, getNote } from "@/lib/notes";
import { renderMarkdown } from "@/lib/markdown";

export function generateStaticParams() {
  return getAllNotes().map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getNote(slug);
  return { title: note?.title ?? "Note" };
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();
  const html = renderMarkdown(note.content);
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
      <Link
        href="/notes"
        className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
      >
        ← all notes
      </Link>
      <article className="mt-6">
        <h1 className="text-3xl font-semibold tracking-tight">{note.title}</h1>
        <div className="mt-2 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <time>{note.date}</time>
          <span>·</span>
          <span>{note.readingTime} min read</span>
        </div>
        <div
          className="prose mt-10 max-w-none text-[15px] leading-7 text-zinc-800 dark:text-zinc-200 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-semibold [&_p]:my-4 [&_a]:underline [&_a]:underline-offset-4 [&_code]:rounded [&_code]:bg-zinc-100 [&_code]:px-1 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.9em] dark:[&_code]:bg-zinc-800 [&_pre]:my-6 [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-zinc-900 [&_pre]:p-4 [&_pre]:text-sm [&_pre]:text-zinc-100 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </main>
  );
}
