import type {NextConfig} from 'next';

const repoName = 'cartera';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
