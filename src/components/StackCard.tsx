import { Card } from "./Card";

const stack = [
  { name: "Python", level: 95 },
  { name: "PyTorch", level: 88 },
  { name: "Transformers / TRL", level: 80 },
  { name: "vLLM / SGLang", level: 65 },
  { name: "TypeScript", level: 55 },
];

export function StackCard() {
  return (
    <Card title="Stack" hint="Daily drivers">
      <ul className="space-y-3">
        {stack.map((s) => (
          <li key={s.name}>
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium">{s.name}</span>
              <span className="tabular-nums text-zinc-500 dark:text-zinc-400">
                {s.level}
              </span>
            </div>
            <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
              <div
                className="h-full rounded-full bg-zinc-900 dark:bg-zinc-200"
                style={{ width: `${s.level}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
