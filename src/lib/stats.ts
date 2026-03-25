import type { GitHubUser, GitHubRepo, DevStats } from "../types/index.js";
import { pickPersonality, pickTitle } from "./personality.js";

export function calculateStats(user: GitHubUser, repos: GitHubRepo[]): DevStats {
  const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
  const totalForks = repos.reduce((sum, r) => sum + r.forks_count, 0);

  const langMap = new Map<string, number>();
  for (const repo of repos) {
    if (repo.language) {
      langMap.set(repo.language, (langMap.get(repo.language) ?? 0) + 1);
    }
  }
  const topLanguages = [...langMap.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  const accountAgeDays = Math.floor(
    (Date.now() - new Date(user.created_at).getTime()) / (1000 * 60 * 60 * 24)
  );

  const atk = clampScore(Math.min(100, Math.log2(totalStars + 1) * 10 + repos.length * 0.5));
  const def = clampScore(Math.min(100, Math.log2(totalForks + 1) * 12 + user.followers * 0.1));
  const spd = clampScore(calculateSpd(repos, accountAgeDays));
  const int = clampScore(Math.min(100, langMap.size * 15 + Math.log2(repos.length + 1) * 8));

  const level = Math.min(99, Math.floor((atk + def + spd + int) / 4 * 0.99));

  const scores = { atk, def, spd, int };
  const personality = pickPersonality(scores, topLanguages);
  const title = pickTitle(scores);

  return {
    username: user.login,
    name: user.name ?? user.login,
    avatarUrl: user.avatar_url,
    bio: user.bio ?? "",
    totalStars,
    totalForks,
    totalRepos: repos.length,
    followers: user.followers,
    topLanguages,
    accountAgeDays,
    level,
    scores,
    personality,
    title,
  };
}

function clampScore(n: number): number {
  return Math.max(0, Math.min(100, Math.round(n)));
}

function calculateSpd(repos: GitHubRepo[], accountAgeDays: number): number {
  const now = Date.now();
  const recentRepos = repos.filter(
    (r) => now - new Date(r.updated_at).getTime() < 90 * 24 * 60 * 60 * 1000
  ).length;
  const recentRatio = repos.length > 0 ? recentRepos / repos.length : 0;
  const ageBonus = Math.min(20, accountAgeDays / 365 * 5);
  return recentRatio * 60 + ageBonus + Math.min(20, repos.length * 0.5);
}
