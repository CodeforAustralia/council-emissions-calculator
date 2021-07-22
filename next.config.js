const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  basePath: isProduction ? "/council-emissions-calculator-spike" : "",
  assetPrefix: isProduction ? "/council-emissions-calculator-spike/" : "",
  reactStrictMode: true,
};
