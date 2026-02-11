/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return {
      beforeFiles: [
        // Browsers request /favicon.ico first — serve our favicon so tab shows our icon, not Vercel default
        { source: "/favicon.ico", destination: "/favicon.png" },
      ],
    };
  },
  // Use in-memory webpack cache during development to avoid filesystem pack rename ENOENT warnings
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = { type: 'memory' };
    }
    return config;
  },
};

export default nextConfig;
