/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["github-readme-stats.vercel.app", "skillicons.dev"],
  },
  env: {
    PUBLIC_GITHUB_STATS_URL: process.env.PUBLIC_GITHUB_STATS_URL,
  },
};

export default nextConfig;
