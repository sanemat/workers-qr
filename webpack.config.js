module.exports = {
  mode: "production",
  entry: "./dist/index.js",
  output: {
    filename: "bundle.js",
  },
  target: ["web", "es2020"],
};
