module.exports = {
  entry: "./dist/index.js",
  output: {
    filename: "bundle.js",
  },
  target: ["web", "es2020"],
  resolve: {
    fallback: {
      buffer: require.resolve("buffer/"),
      util: require.resolve("util/"),
      zlib: require.resolve("browserify-zlib"),
      assert: require.resolve("assert/"),
      stream: require.resolve("stream-browserify"),
    },
  },
};
