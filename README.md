# devcard

Developer trading cards generated from your GitHub profile.

```bash
npx devcard anhanho
npx devcard anhanho vs torvalds
```

## What It Does

Point it at any GitHub username. It fetches your public profile and repos, calculates RPG-style stats, assigns a personality type, and renders a trading card in your terminal.

```
╔══════════════════════════════════════════════╗
║  ★★★★☆ Epic                         LV.67  ║
║                                              ║
║  anhanho                                     ║
║  "The Type Guardian"                         ║
║                                              ║
║  TypeScript · React · Node.js                ║
║                                              ║
║  ATK ████████░░   82   (1.2k ★)             ║
║  DEF ██████░░░░   61   (89 forks)           ║
║  SPD █████████░   91   (47 repos)           ║
║  INT ███████░░░   73   (4 langs)            ║
║                                              ║
║  ✦ 127 followers  ✦ 1.2k stars              ║
║                                              ║
║                              devcard v0.1.0  ║
╚══════════════════════════════════════════════╝
```

## Duel Mode

Compare two developers side by side.

```bash
npx devcard anhanho vs torvalds
```

```
╔══════════════════════ VS ══════════════════════╗
║                                                ║
║  anhanho              ⚔️     torvalds          ║
║  LV.42                       LV.99            ║
║  "The Type Guardian"         "The Relentless  ║
║                               Shipper"        ║
║                                                ║
║  ATK    1  ◄────  100  ATK ✓                  ║
║  DEF    0  ◄────  100  DEF ✓                  ║
║  SPD   81  ◄────   84  SPD ✓                  ║
║  INT   23  ◄────   55  INT ✓                  ║
║                                                ║
║  Winner: torvalds                              ║
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
| ...and 12 more | |

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
npm install -g devcard
```

Or run without installing:

```bash
npx devcard <username>
```

## Rate Limits

GitHub allows 60 API requests/hour without authentication. For heavy use, set a token:

```bash
export GITHUB_TOKEN=ghp_your_token_here
npx devcard anhanho
```

## Development

```bash
git clone https://github.com/anhanho/devcard
cd devcard
npm install
npm run dev -- anhanho
npm run build
npm run lint
```

## License

MIT
