console.log(`[INFO]: NODE_ENV: ${process.env.NODE_ENV}`);

module.exports = {
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        use: ["@svgr/webpack?+titleProp"],
      },
    );

    return config;
  },
  reactStrictMode: true,
}
