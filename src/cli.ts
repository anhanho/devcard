import { fetchUser, fetchRepos } from "./lib/github.js";
import { calculateStats } from "./lib/stats.js";
import { renderCard } from "./lib/render.js";
import { renderDuel } from "./lib/duel.js";

const HELP = `
devduel — Developer Trading Cards from GitHub

Usage:
  devduel <username>              Generate your card
  devduel <user1> vs <user2>     Duel two developers

Options:
  -h, --help       Show this help
  -v, --version    Show version

Examples:
  npx devduel torvalds
  npx devduel torvalds vs sindresorhus
`;

async function main(): Promise<void> {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes("-h") || args.includes("--help")) {
    console.log(HELP);
    return;
  }

  if (args.includes("-v") || args.includes("--version")) {
    console.log("devduel v0.1.0");
    return;
  }

  const vsIndex = args.indexOf("vs");

  if (vsIndex !== -1) {
    const user1 = args[vsIndex - 1];
    const user2 = args[vsIndex + 1];
    if (!user1 || !user2) {
      console.error("Usage: devduel <user1> vs <user2>");
      process.exit(1);
    }
    console.log(`\n  ⚔️  Loading duel: ${user1} vs ${user2}...\n`);
    const [stats1, stats2] = await Promise.all([
      loadStats(user1),
      loadStats(user2),
    ]);
    renderDuel(stats1, stats2);
  } else {
    const username = args[0];
    if (!username) {
      console.error("Usage: devduel <username>");
      process.exit(1);
    }
    console.log(`\n  🃏  Loading card for ${username}...\n`);
    const stats = await loadStats(username);
    renderCard(stats);
  }
}

async function loadStats(username: string) {
  const [user, repos] = await Promise.all([
    fetchUser(username),
    fetchRepos(username),
  ]);
  return calculateStats(user, repos);
}

main().catch((err: unknown) => {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
});
