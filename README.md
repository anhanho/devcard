# devduel

Developer trading cards generated from your GitHub profile. Compare stats, discover your type, duel friends.

```bash
npx devduel torvalds
npx devduel torvalds vs sindresorhus
```

## What It Does

Point it at any GitHub username. It fetches your public profile and repos, calculates RPG-style stats, assigns a personality type, and renders a trading card in your terminal.

```
╔══════════════════════════════════════════════╗
║  ★★★★☆ Epic                         LV.67  ║
║                                              ║
║  torvalds                                    ║
║  "The Relentless Shipper"                    ║
║                                              ║
║  C · C++ · Shell                             ║
║                                              ║
║  ATK ██████████  100   (198k ★)              ║
║  DEF ██████████  100   (52k forks)           ║
║  SPD ████████░░   84   (8 repos)             ║
║  INT ██████░░░░   55   (3 langs)             ║
║                                              ║
║  ✦ 238k followers  ✦ 198k stars              ║
║                                              ║
║                             devduel v0.1.0   ║
╚══════════════════════════════════════════════╝
```

## Duel Mode

Compare two developers side by side.

```bash
npx devduel torvalds vs sindresorhus
```

```
╔══════════════════════ VS ══════════════════════╗
║                                                ║
║  torvalds              ⚔️     sindresorhus     ║
║  LV.83                        LV.79            ║
║  "The Relentless Shipper"     "The Type        ║
║                                Guardian"        ║
║                                                ║
║  ATK ✓ 100  ────►   95  ATK                   ║
║  DEF ✓ 100  ────►   88  DEF                   ║
║  SPD    84  ◄────   92  SPD ✓                  ║
║  INT    55  ◄────   90  INT ✓                  ║
║                                                ║
║  Winner: DRAW                                  ║
║                                                ║
╚════════════════════════════════════════════════╝
```

## Stats

| Stat | Meaning | Based On |
|------|---------|----------|
| ATK | Offensive power | Stars + repo count |
| DEF | Defensive strength | Forks + followers |
| SPD | Activity speed | Recent repo updates + account age |
| INT | Intelligence | Language diversity + repo variety |

## Personality Types

20 personality types based on your stats and primary language:

| Type | Trigger |
|------|---------|
| The Relentless Shipper | ATK ≥ 80 and SPD ≥ 80 |
| The Polyglot Architect | DEF ≥ 80 and INT ≥ 80 |
| The Type Guardian | Primary language: TypeScript |
| The Snake Charmer | Primary language: Python |
| The Memory Sage | Primary language: Rust |
| The Gopher | Primary language: Go |
| The Enterprise Warrior | Primary language: Java |
| The Frontend Wizard | Primary language: JavaScript |
| The Bare Metal Hacker | Primary language: C |
| The Performance Purist | Primary language: C++ |
| The Apple Artisan | Primary language: Swift |
| The Android Knight | Primary language: Kotlin |
| The Rails Rider | Primary language: Ruby |
| The Web Survivor | Primary language: PHP |
| The Speed Demon | SPD ≥ 90 |
| The Language Collector | INT ≥ 90 |
| The Star Farmer | ATK ≥ 90 |
| The Community Pillar | DEF ≥ 90 |
| The Silent Observer | ATK < 30 and SPD < 30 |
| The Versatile Coder | Default |

## Title Tiers

| Tier | Requirement |
|------|-------------|
| ★★★★★ Legendary | Average stat ≥ 80 |
| ★★★★☆ Epic | Average stat ≥ 60 |
| ★★★☆☆ Rare | Average stat ≥ 40 |
| ★★☆☆☆ Common | Average stat ≥ 20 |
| ★☆☆☆☆ Starter | Everyone starts here |

## Install

```bash
npm install -g devduel
```

Or run without installing:

```bash
npx devduel <username>
```

## Rate Limits

GitHub allows 60 API requests/hour without authentication. For heavy use, set a token:

```bash
export GITHUB_TOKEN=ghp_your_token_here
npx devduel torvalds
```

## Development

```bash
git clone https://github.com/anhanho/devcard
cd devcard
npm install
npm run dev -- torvalds
npm run build
npm run lint
```

## License

MIT
