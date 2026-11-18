export interface GithubRepo {
  owner: string;
  repo: string;
}

export function parseGithubUrl(text: string): GithubRepo {
  const [owner, repo] = new URL(text).pathname.split('/').filter(Boolean);
  return { owner, repo };
}
