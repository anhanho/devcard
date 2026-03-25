import type { DevStats } from "../types/index.js";

export function renderDuel(p1: DevStats, p2: DevStats): void {
  const w = 50;
  const pad = (s: string, len: number) => s + " ".repeat(Math.max(0, len - s.length));
  const rpad = (s: string, len: number) => " ".repeat(Math.max(0, len - s.length)) + s;
  const line = (content: string) => `║  ${pad(content, w)}║`;
  const empty = line("");

  const cats = [
    { name: "ATK", v1: p1.scores.atk, v2: p2.scores.atk },
    { name: "DEF", v1: p1.scores.def, v2: p2.scores.def },
    { name: "SPD", v1: p1.scores.spd, v2: p2.scores.spd },
    { name: "INT", v1: p1.scores.int, v2: p2.scores.int },
  ];

  let p1wins = 0;
  let p2wins = 0;
  const statLines = cats.map((c) => {
    const arrow = c.v1 > c.v2 ? "────►" : c.v1 < c.v2 ? "◄────" : "═════";
    const mark1 = c.v1 > c.v2 ? " ✓" : "";
    const mark2 = c.v2 > c.v1 ? " ✓" : "";
    if (c.v1 > c.v2) p1wins++;
    else if (c.v2 > c.v1) p2wins++;
    return line(`${c.name}${mark1}  ${rpad(String(c.v1), 3)}  ${arrow}  ${pad(String(c.v2), 3)}  ${c.name}${mark2}`);
  });

  const winner = p1wins > p2wins ? p1.username : p2wins > p1wins ? p2.username : "DRAW";

  const lines = [
    `╔${"═".repeat(22)} VS ${"═".repeat(22)}╗`,
    empty,
    line(`${pad(p1.username, 22)}⚔️     ${p2.username}`),
    line(`${pad(`LV.${p1.level}`, 22)}       LV.${p2.level}`),
    line(`${pad(`"${p1.personality}"`, 22)}       "${p2.personality}"`),
    empty,
    ...statLines,
    empty,
    line(`Winner: ${winner}`),
    empty,
    `╚${"═".repeat(w + 2)}╝`,
  ];

  console.log(lines.join("\n"));
}
