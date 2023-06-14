import { Octokit } from "octokit";

interface IGithubUser {
  id: number;
  login: string;
  name: string;
  email: string;
  avatar_url: string;
  created_at: string;
  updated_at: string;
  bio: string;
  location: string;
  blog: string;
  company: string;
  followers_count: number;
  following_count: number;
  starred_repositories_count: number;
  repositories_count: number;
  gists_count: number;
  open_issues_count: number;
  closed_issues_count: number;
  contributions: number;
}

export interface IGithubRepository {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: IGithubUser;
  private: boolean;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  archive_url: string;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  deployments_url: string;
  downloads_url: string;
  events_url: string;
  forks_url: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url: string;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  languages_url: string;
  merges_url: string;
  milestones_url: string;
  notifications_url: string;
  pulls_url: string;
  releases_url: string;
  ssh_url: string;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  tags_url: string;
  teams_url: string;
  trees_url: string;
  clone_url: string;
  mirror_url: string;
  hooks_url: string;
  svn_url: string;
  homepage: string;
  language: string;
  forks_count: number;
  stargazers_count: number;
  watchers_count: number;
  size: number;
  default_branch: string;
  open_issues_count: number;
  is_template: boolean;
  topics: string[];
  has_issues: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_downloads: boolean;
  has_discussions: boolean;
  archived: boolean;
  disabled: boolean;
  visibility: string;
  pushed_at: string;
  created_at: string;
  updated_at: string;
  permissions: {
    admin: boolean;
    push: boolean;
    pull: boolean;
  };
  security_and_analysis: {
    advanced_security: {
      status: string;
    };
    secret_scanning: {
      status: string;
    };
    secret_scanning_push_protection: {
      status: string;
    };
  };
}

export default async function getAllRepositories (req, res) {
  const octokit = new Octokit({
    auth: process.env.API_KEY
  });

  const followers = await octokit.request('GET /users/TimmyDDthe1st/followers?per_page=100')
  const followerCount = followers.data.length
  const stars = await octokit.request('GET /users/TimmyDDthe1st/repos?per_page=100')
  const starsCount = stars.data.filter((repo: IGithubRepository) => !repo.fork).reduce((acc: number, item: IGithubRepository) => acc + item.stargazers_count, 0);
  console.log(stars)
  return res.status(200).json({followers, followerCount, stars, starsCount})
}
