import { Card } from "./Card";
import { site } from "@/config/site";

export function LearningCard() {
  return (
    <Card title="Currently Learning" hint="In progress">
      <ul className="space-y-4">
        {site.focus.map((item) => (
          <li key={item.title}>
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="text-sm font-medium truncate">{item.title}</div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  {item.note}
                </div>
              </div>
              <span className="shrink-0 text-xs tabular-nums text-zinc-500 dark:text-zinc-400">
                {item.progress}%
              </span>
            </div>
            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
              <div
                className="h-full rounded-full bg-zinc-900 dark:bg-zinc-200"
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
