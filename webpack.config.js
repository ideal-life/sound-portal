const path = require("path");
const webpack = require("webpack");

module.exports = {
  target: "web",
  context: path.join(__dirname, "public"),
  entry: "./index.jsx",
  output: {
    path: path.join(__dirname, "public/build"),
    publicPath: "build/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.less$/,
        loader: "style!css!less"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: [ "es2015", "stage-2" ]
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: [ "es2015", "stage-2", "react" ]
        }
      },
      {
        test: /\.woff$/,
        loader: "file"
      },
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.jpeg$/,
        loader: "file"
      }
    ]
  },
  resolve: {
    root: path.resolve(__dirname, "public"),
    alias:{
      globals: path.resolve( __dirname, "globals")
    },
    extensions: [ "", ".js", ".jsx", ".less" ],
    modulesDirectories: [ "node_modules" ]
  }
};