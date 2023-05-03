/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["gsap"]);

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        test: /\.(mov|mp4)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "static/videos", // path for your videos
            },
          },
        ],
      }
    );
    return config;
  },
};

module.exports = withTM(nextConfig);
