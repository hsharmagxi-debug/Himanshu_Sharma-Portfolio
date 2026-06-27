"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getRepos, GitHubRepo } from "../lib/github";

const FEATURED_REPOS = [
  "Vikash-Portfolio",
  "AI-Forge",
  // Add more repos here later
  // "terraform-modules",
  // "k8s-lab",
];

export default function GitHubShowcase() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRepos() {
      try {
        const data = await getRepos();

        const featured = data.filter((repo) =>
          FEATURED_REPOS.includes(repo.name)
        );

        setRepos(featured);
      } catch (error) {
        console.error("Failed to load GitHub repos:", error);
      } finally {
        setLoading(false);
      }
    }

    loadRepos();
  }, []);

  if (loading) {
    return (
      <div className="mt-20 border-t border-zinc-800 pt-10">
        <p className="text-zinc-500">
          Loading GitHub projects...
        </p>
      </div>
    );
  }

  if (repos.length === 0) {
    return null;
  }

  return (
    <div className="mt-20 border-t border-zinc-800 pt-10">
      <h2 className="text-2xl font-semibold text-green-400 mb-4">
        🚀 Featured GitHub Projects
      </h2>

      <p className="text-zinc-500 mb-8 max-w-3xl">
        Selected repositories showcasing platform engineering,
        DevOps automation, AI initiatives, and real-world engineering work.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {repos.map((repo, index) => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="
              block
              p-6
              border
              border-zinc-800
              rounded-xl
              bg-zinc-950
              hover:border-green-500
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            <h3 className="text-xl font-semibold text-green-400">
              {repo.name}
            </h3>

            <p className="text-zinc-400 mt-3 min-h-[48px]">
              {repo.description || "No description available."}
            </p>

            <div className="mt-4 flex flex-wrap gap-4 text-sm text-zinc-500">
              <span>⭐ {repo.stargazers_count}</span>

              {repo.language && (
                <span>⚡ {repo.language}</span>
              )}

              <span>
                📅{" "}
                {new Date(repo.updated_at).toLocaleDateString("en-IN", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>

            <div className="mt-6 text-white font-medium">
              View Repository →
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}