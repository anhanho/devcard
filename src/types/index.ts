export interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface GitHubRepo {
  name: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  fork: boolean;
  updated_at: string;
}

export interface DevStats {
  username: string;
  name: string;
  avatarUrl: string;
  bio: string;
  totalStars: number;
  totalForks: number;
  totalRepos: number;
  followers: number;
  topLanguages: { name: string; count: number }[];
  accountAgeDays: number;
  level: number;
  scores: {
    atk: number; // commits proxy (stars + repos activity)
    def: number; // code quality proxy (forks = others trust your code)
    spd: number; // activity proxy (recent repos, account activity)
    int: number; // diversity proxy (language count, repo variety)
  };
  personality: string;
  title: string;
}

export interface DuelResult {
  player1: DevStats;
  player2: DevStats;
  winner: string;
  categories: {
    name: string;
    p1: number;
    p2: number;
    winner: 1 | 2 | 0;
  }[];
}
