/* eslint-disable no-undef, @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require ("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  resolve: {extensions: [".js", ".ts", ".tsx"]},
  devServer: {historyApiFallback: true},
  plugins: [new HtmlWebpackPlugin ({template: "./public/index.html"})],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          "css-modules-typescript-loader",
          {
            loader: "css-loader",
            options: {modules: true}
          },
          "sass-loader"
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: "file-loader"
      }
    ]
  }
}