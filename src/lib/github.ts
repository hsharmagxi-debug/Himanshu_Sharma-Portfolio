import axios from "axios";

const GITHUB_USERNAME = "vikas0486";

export interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  fork: boolean;
  language: string | null;
  updated_at: string;
  created_at: string;
  homepage: string | null;
  topics?: string[];
}

export const getRepos = async (): Promise<GitHubRepo[]> => {
  try {
    const res = await axios.get<GitHubRepo[]>(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
      {
        params: {
          sort: "updated",
          per_page: 100,
        },
        headers: {
          Accept: "application/vnd.github+json",
        },
      }
    );

    const filtered = res.data.filter(
      (repo) =>
        !repo.fork &&
        repo.name.toLowerCase() !== GITHUB_USERNAME.toLowerCase()
    );

    return filtered;
  } catch (error) {
    console.error("GitHub API error:", error);
    return [];
  }
};