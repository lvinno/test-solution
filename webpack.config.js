const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDevelopment = true;
console.log({ isDevelopment });
console.log({ dirRoot: path.resolve(__dirname, "src/components") });
module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
  mode: process.env.NODE_ENV || "development",
  resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"] },
  devServer: { contentBase: path.join(__dirname, "src") },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@Components": path.resolve(__dirname, "src/components"),
    },
    extensions: ["", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },

      {
        test: /\.(s(a|c)ss)$/,
        oneOf: [
          {
            test: /\.module\.(s(a|c)ss)$/,
            use: [
              isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
              {
                loader: "css-loader",
                options: {
                  modules: true,
                  sourceMap: isDevelopment,
                },
              },
              "sass-loader",
            ],
          },
          {
            use: [
              isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
              "css-loader",
              "sass-loader",
            ],
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? "[name].css" : "[name].[hash].css",
      chunkFilename: isDevelopment ? "[id].css" : "[id].[hash].css",
    }),
  ],
};
