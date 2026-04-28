import { Card } from "./Card";
import { site } from "@/config/site";

export function ContactCard() {
  const links = [
    { label: "Email", href: `mailto:${site.email}`, value: site.email },
    { label: "GitHub", href: `https://github.com/${site.github}`, value: `@${site.github}` },
    site.twitter && {
      label: "Twitter",
      href: `https://twitter.com/${site.twitter}`,
      value: `@${site.twitter}`,
    },
    site.linkedin && {
      label: "LinkedIn",
      href: `https://www.linkedin.com/in/${site.linkedin}`,
      value: site.linkedin,
    },
    { label: "Resume", href: site.resumeUrl, value: "Download PDF" },
  ].filter(Boolean) as { label: string; href: string; value: string }[];

  return (
    <Card title="Get in Touch">
      <ul className="space-y-2">
        {links.map((l) => (
          <li
            key={l.label}
            className="flex items-center justify-between text-sm"
          >
            <span className="text-zinc-500 dark:text-zinc-400">{l.label}</span>
            <a
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="font-medium hover:underline underline-offset-4 truncate ml-3"
            >
              {l.value}
            </a>
          </li>
        ))}
      </ul>
    </Card>
  );
}
