import type {NextConfig} from 'next';

const repoName = 'cartera';

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

export const basePath = isGithubActions ? `/${repoName}` : undefined;

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: isGithubActions ? 'export' : undefined,
  basePath: basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
