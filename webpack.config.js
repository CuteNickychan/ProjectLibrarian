const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const path = require("path");

var config = {
  experiments: {
    topLevelAwait: true,
  },
  //Firebase causing isssues with bundle size
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  // The entry point file described above
  entry: "./src/index.tsx",
  // The location of the build folder described above
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
  },
  output: {
    path: path.resolve(__dirname, "public/publicsrc"),
    filename: "bundle.js",
  },
  plugins: [
    new BrowserSyncPlugin({
      proxy: "localhost:5000",
      baseDir: ["public"],
    }),
  ],
};

module.exports = (env, argv) => {
  // Optional and for development only. This provides the ability to
  // map the built code back to the original source format when debugging.

  if (argv.mode === "development") {
    config.devtool = "eval-source-map";
  }

  if (argv.mode === "production") {
    //...
  }

  return config;
};
