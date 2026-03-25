import type { DevStats } from "../types/index.js";

const W = 48;

export function renderCard(stats: DevStats): void {
  const bar = (val: number) => {
    const filled = Math.round(val / 10);
    return "\u2588".repeat(filled) + "\u2591".repeat(10 - filled);
  };

  const langs = stats.topLanguages.slice(0, 3).map((l) => l.name).join(" \u00b7 ");

  const lines = [
    top(),
    row(`${stats.title}${sp(W - vw(stats.title) - vw(`LV.${stats.level}`))}LV.${stats.level}`),
    row(""),
    row(stats.username),
    row(`"${stats.personality}"`),
    row(""),
    row(langs),
    row(""),
    row(`ATK ${bar(stats.scores.atk)}  ${rp(String(stats.scores.atk), 3)}   (${fmt(stats.totalStars)} stars)`),
    row(`DEF ${bar(stats.scores.def)}  ${rp(String(stats.scores.def), 3)}   (${fmt(stats.totalForks)} forks)`),
    row(`SPD ${bar(stats.scores.spd)}  ${rp(String(stats.scores.spd), 3)}   (${stats.totalRepos} repos)`),
    row(`INT ${bar(stats.scores.int)}  ${rp(String(stats.scores.int), 3)}   (${stats.topLanguages.length} langs)`),
    row(""),
    row(`${fmt(stats.followers)} followers  |  ${fmt(stats.totalStars)} stars`),
    row(""),
    row(`${sp(W - vw("devduel v0.1.0"))}devduel v0.1.0`),
    bot(),
  ];

  console.log(lines.join("\n"));
}

function top(): string {
  return `\u2554${"═".repeat(W + 2)}\u2557`;
}

function bot(): string {
  return `\u255a${"═".repeat(W + 2)}\u255d`;
}

function row(content: string): string {
  const padding = W - vw(content);
  return `\u2551 ${content}${sp(padding)} \u2551`;
}

function sp(n: number): string {
  return " ".repeat(Math.max(0, n));
}

function rp(s: string, len: number): string {
  return sp(len - s.length) + s;
}

function vw(s: string): number {
  let width = 0;
  for (const ch of s) {
    const code = ch.codePointAt(0) ?? 0;
    if (code > 0xffff) {
      width += 2;
    } else if (code === 0xfe0f) {
      continue;
    } else {
      width += 1;
    }
  }
  return width;
}

function fmt(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return String(n);
}
