import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // The basePath and assetPrefix are configured by the GitHub Actions workflow.
  // images.unoptimized is also set by the workflow.
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
