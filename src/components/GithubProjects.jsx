import React, { useEffect, useState } from "react";


const GITHUB_TOKEN = "add_your_own_key";

function GithubProjects() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const username = "nixsh5"; // <-- Replace with your GitHub username

    useEffect(() => {
        setLoading(true);
        setError("");
        fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
                Accept: "application/vnd.github+json",
            },
        })
            .then(res => {
                if (!res.ok) {
                    if (res.status === 403) {
                        throw new Error("GitHub API rate limit exceeded or token invalid. Please try again later.");
                    }
                    throw new Error("Failed to fetch repositories.");
                }
                return res.json();
            })
            .then(async data => {
                if (!Array.isArray(data)) {
                    setRepos([]);
                    setError("No repositories found.");
                    setLoading(false);
                    return;
                }
                // Fetch languages for each repo
                const reposWithLangs = await Promise.all(
                    data.map(async repo => {
                        try {
                            const langRes = await fetch(
                                `https://api.github.com/repos/${username}/${repo.name}/languages`,
                                {
                                    headers: {
                                        Authorization: `token ${GITHUB_TOKEN}`,
                                        Accept: "application/vnd.github+json",
                                    },
                                }
                            );
                            if (!langRes.ok) return { ...repo, languages: [] };
                            const languages = await langRes.json();
                            return { ...repo, languages: Object.keys(languages) };
                        } catch {
                            return { ...repo, languages: [] };
                        }
                    })
                );
                setRepos(reposWithLangs);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message || "Failed to fetch repositories.");
                setLoading(false);
            });
    }, [username]);

    if (loading) {
        return (
            <div className="text-[#38FFB3] font-mono text-lg mt-8">
                Loading projects...
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-[#38FFB3] font-mono text-lg mt-8">
                {error}
            </div>
        );
    }

    if (!repos.length) {
        return (
            <div className="text-[#38FFB3] font-mono text-lg mt-8">
                No public projects found.
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {repos.map(repo => (
                <div
                    key={repo.id}
                    className="bg-[#20312C]/23 border border-[#222c3c] rounded-lg p-8 min-h-[200px] shadow-md flex flex-col justify-between z-10"
                >
                    <div>
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#38FFB3] font-mono text-2xl hover:underline"
                        >
                            {repo.name}
                        </a>
                        <p className="text-gray-400 font-mono mt-2">{repo.description}</p>
                    </div>
                    {/* List all languages */}
                    {repo.languages && repo.languages.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                            {repo.languages.map(lang => (
                                <span
                                    key={lang}
                                    className="text-[#38FFB3] font-mono bg-[#222c3c] px-2 py-1 rounded text-xs"
                                >
                  {lang}
                </span>
                            ))}
                        </div>
                    )}
                    {/* Stats */}
                    <div className="flex items-center mt-4 space-x-4 text-xs">
            <span className="text-gray-400 font-mono">
              ⭐ {repo.stargazers_count}
            </span>
                        <span className="text-gray-400 font-mono">
              🍴 {repo.forks_count}
            </span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GithubProjects;
