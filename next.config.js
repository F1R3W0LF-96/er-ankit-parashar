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
  publicRuntimeConfig: {
    PIXABAY_BASE_URL: "https://pixabay.com/api/",
    PIXABAY_SECRET_KEY: "11903245-c6f2294b80d77d1fd7402ea4e",
  },
};

module.exports = withTM(nextConfig);
