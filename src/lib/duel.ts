import type { DevStats } from "../types/index.js";

const W = 52;

export function renderDuel(p1: DevStats, p2: DevStats): void {
  const cats = [
    { name: "ATK", v1: p1.scores.atk, v2: p2.scores.atk },
    { name: "DEF", v1: p1.scores.def, v2: p2.scores.def },
    { name: "SPD", v1: p1.scores.spd, v2: p2.scores.spd },
    { name: "INT", v1: p1.scores.int, v2: p2.scores.int },
  ];

  let p1wins = 0;
  let p2wins = 0;

  const statLines = cats.map((c) => {
    const arrow = c.v1 > c.v2 ? "---->" : c.v1 < c.v2 ? "<----" : "=====";
    const mark1 = c.v1 > c.v2 ? " *" : "  ";
    const mark2 = c.v2 > c.v1 ? " *" : "";
    if (c.v1 > c.v2) p1wins++;
    else if (c.v2 > c.v1) p2wins++;
    return row(`${c.name}${mark1} ${rp(String(c.v1), 4)}  ${arrow}  ${lp(String(c.v2), 4)}  ${c.name}${mark2}`);
  });

  const winner = p1wins > p2wins ? p1.username : p2wins > p1wins ? p2.username : "DRAW";

  const p1name = trunc(p1.username, 20);
  const p2name = trunc(p2.username, 20);
  const p1type = trunc(`"${p1.personality}"`, 24);
  const p2type = trunc(`"${p2.personality}"`, 24);

  const lines = [
    `\u2554${"═".repeat(Math.floor((W - 2) / 2))} VS ${"═".repeat(Math.ceil((W - 2) / 2))}\u2557`,
    row(""),
    row(`${lp(p1name, 22)}  VS  ${p2name}`),
    row(`${lp(`LV.${p1.level}`, 22)}      LV.${p2.level}`),
    row(`${lp(p1type, 22)}      ${p2type}`),
    row(""),
    ...statLines,
    row(""),
    row(`Winner: ${winner}`),
    row(""),
    `\u255a${"═".repeat(W + 2)}\u255d`,
  ];

  console.log(lines.join("\n"));
}

function row(content: string): string {
  const padding = W - vw(content);
  return `\u2551 ${content}${sp(padding)} \u2551`;
}

function sp(n: number): string {
  return " ".repeat(Math.max(0, n));
}

function lp(s: string, len: number): string {
  return s + sp(len - vw(s));
}

function rp(s: string, len: number): string {
  return sp(len - s.length) + s;
}

function trunc(s: string, max: number): string {
  if (vw(s) <= max) return s;
  return s.slice(0, max - 2) + "..";
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
