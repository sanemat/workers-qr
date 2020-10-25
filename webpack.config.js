module.exports = {
  entry: "./dist/index.js",
  output: {
    filename: "bundle.js",
  },
  target: ["web", "es2020"],
  resolve: {
    fallback: {
      zlib: require.resolve("browserify-zlib"),
      assert: require.resolve("assert/"),
      buffer: require.resolve("buffer/"),
      stream: require.resolve("stream-browserify"),
    },
  },
};
