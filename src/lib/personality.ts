interface Scores {
  atk: number;
  def: number;
  spd: number;
  int: number;
}

interface Lang {
  name: string;
  count: number;
}

const PERSONALITIES: { test: (s: Scores, langs: Lang[]) => boolean; name: string }[] = [
  { test: (s) => s.atk >= 80 && s.spd >= 80, name: "The Relentless Shipper" },
  { test: (s) => s.def >= 80 && s.int >= 80, name: "The Polyglot Architect" },
  { test: (s) => s.spd >= 90, name: "The Speed Demon" },
  { test: (s) => s.int >= 90, name: "The Language Collector" },
  { test: (s) => s.atk >= 90, name: "The Star Farmer" },
  { test: (s) => s.def >= 90, name: "The Community Pillar" },
  { test: (_s, l) => l.length > 0 && l[0]!.name === "TypeScript", name: "The Type Guardian" },
  { test: (_s, l) => l.length > 0 && l[0]!.name === "Python", name: "The Snake Charmer" },
  { test: (_s, l) => l.length > 0 && l[0]!.name === "Rust", name: "The Memory Sage" },
  { test: (_s, l) => l.length > 0 && l[0]!.name === "Go", name: "The Gopher" },
  { test: (_s, l) => l.length > 0 && l[0]!.name === "Java", name: "The Enterprise Warrior" },
  { test: (_s, l) => l.length > 0 && l[0]!.name === "JavaScript", name: "The Frontend Wizard" },
  { test: (_s, l) => l.length > 0 && l[0]!.name === "C", name: "The Bare Metal Hacker" },
  { test: (_s, l) => l.length > 0 && l[0]!.name === "C++", name: "The Performance Purist" },
  { test: (_s, l) => l.length > 0 && l[0]!.name === "Swift", name: "The Apple Artisan" },
  { test: (_s, l) => l.length > 0 && l[0]!.name === "Kotlin", name: "The Android Knight" },
  { test: (_s, l) => l.length > 0 && l[0]!.name === "Ruby", name: "The Rails Rider" },
  { test: (_s, l) => l.length > 0 && l[0]!.name === "PHP", name: "The Web Survivor" },
  { test: (s) => s.atk < 30 && s.spd < 30, name: "The Silent Observer" },
  { test: () => true, name: "The Versatile Coder" },
];

export function pickPersonality(scores: Scores, langs: Lang[]): string {
  const match = PERSONALITIES.find((p) => p.test(scores, langs));
  return match?.name ?? "The Versatile Coder";
}

const TITLES: { test: (s: Scores) => boolean; title: string }[] = [
  { test: (s) => (s.atk + s.def + s.spd + s.int) / 4 >= 80, title: "★★★★★ Legendary" },
  { test: (s) => (s.atk + s.def + s.spd + s.int) / 4 >= 60, title: "★★★★☆ Epic" },
  { test: (s) => (s.atk + s.def + s.spd + s.int) / 4 >= 40, title: "★★★☆☆ Rare" },
  { test: (s) => (s.atk + s.def + s.spd + s.int) / 4 >= 20, title: "★★☆☆☆ Common" },
  { test: () => true, title: "★☆☆☆☆ Starter" },
];

export function pickTitle(scores: Scores): string {
  const match = TITLES.find((t) => t.test(scores));
  return match?.title ?? "★☆☆☆☆ Starter";
}
