/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/gh-pages-test",
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
      },

      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
