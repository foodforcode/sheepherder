const path = require("path");

module.exports = {
  mode: "development",
  entry: "./client/src/index.tsx",
  output: {
    path: path.resolve(__dirname, "./client/dist"),
    filename: "bundle.js",
  },
  watch: true,
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
};
