const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./dist/index.js",
  output: {
    filename: "bundle.js",
  },
  target: ["web", "es2020"],
  resolve: {
    alias: {
      fs: path.resolve(__dirname, "./src/null.js"),
    },
    fallback: {
      zlib: require.resolve("browserify-zlib"),
      assert: require.resolve("assert/"),
      buffer: require.resolve("buffer/"),
      stream: require.resolve("stream-browserify"),
      path: require.resolve("path-browserify"),
    },
  },
  plugins: [
    new webpack.DefinePlugin({ "process.browser": "true" }),
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ],
};
