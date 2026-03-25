import type { DevStats } from "../types/index.js";

export function renderCard(stats: DevStats): void {
  const w = 44; // inner width
  const bar = (val: number) => {
    const filled = Math.round(val / 10);
    return "█".repeat(filled) + "░".repeat(10 - filled);
  };
  const pad = (s: string, len: number) => s + " ".repeat(Math.max(0, len - s.length));
  const rpad = (s: string, len: number) => " ".repeat(Math.max(0, len - s.length)) + s;
  const line = (content: string) => `║  ${pad(content, w)}║`;
  const empty = line("");

  const langs = stats.topLanguages.slice(0, 3).map((l) => l.name).join(" · ");

  const lines = [
    `╔${"═".repeat(w + 2)}╗`,
    `║  ${pad(stats.title, w - 6)}${rpad(`LV.${stats.level}`, 6)}  ║`,
    empty,
    line(stats.username),
    line(`"${stats.personality}"`),
    empty,
    line(langs),
    empty,
    line(`ATK ${bar(stats.scores.atk)}  ${rpad(String(stats.scores.atk), 3)}   (${fmt(stats.totalStars)} ★)`),
    line(`DEF ${bar(stats.scores.def)}  ${rpad(String(stats.scores.def), 3)}   (${fmt(stats.totalForks)} forks)`),
    line(`SPD ${bar(stats.scores.spd)}  ${rpad(String(stats.scores.spd), 3)}   (${stats.totalRepos} repos)`),
    line(`INT ${bar(stats.scores.int)}  ${rpad(String(stats.scores.int), 3)}   (${stats.topLanguages.length} langs)`),
    empty,
    line(`✦ ${fmt(stats.followers)} followers  ✦ ${fmt(stats.totalStars)} stars`),
    empty,
    `║  ${pad("", w - 14)}devcard v0.1.0  ║`,
    `╚${"═".repeat(w + 2)}╝`,
  ];

  console.log(lines.join("\n"));
}

function fmt(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}
