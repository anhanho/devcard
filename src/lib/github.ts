import type { GitHubUser, GitHubRepo } from "../types/index.js";

const API = "https://api.github.com";

export async function fetchUser(username: string): Promise<GitHubUser> {
  const res = await fetch(`${API}/users/${username}`, {
    headers: headers(),
  });
  if (!res.ok) {
    if (res.status === 404) throw new Error(`User "${username}" not found`);
    if (res.status === 403) throw new Error("GitHub API rate limit exceeded. Set GITHUB_TOKEN env var.");
    throw new Error(`GitHub API error: ${res.status}`);
  }
  return res.json() as Promise<GitHubUser>;
}

export async function fetchRepos(username: string): Promise<GitHubRepo[]> {
  const allRepos: GitHubRepo[] = [];
  let page = 1;
  while (true) {
    const res = await fetch(
      `${API}/users/${username}/repos?per_page=100&page=${page}&sort=updated`,
      { headers: headers() }
    );
    if (!res.ok) break;
    const repos = (await res.json()) as GitHubRepo[];
    if (repos.length === 0) break;
    allRepos.push(...repos);
    if (repos.length < 100) break;
    page++;
  }
  return allRepos.filter((r) => !r.fork);
}

function headers(): Record<string, string> {
  const h: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "devcard-cli",
  };
  const token = process.env.GITHUB_TOKEN;
  if (token) h.Authorization = `Bearer ${token}`;
  return h;
}
