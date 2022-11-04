const path = require("path");
const name = "HmacDynamicValue";

const config = {
  target: "web",
  mode: "development",
  entry: "./src/HmacDynamicValue.js",
  output: {
    // path: path.resolve(__dirname, "dist"),
    // filename: "HmacDynamicValue.js",
    path: path.join(
      __dirname,
      "./build/com.strongerfastermonkey.HmacDynamicValue"
    ),
    // pathInfo: true,
    publicPath: "/build/",
    filename: name + ".js",
  },
  module: {},
};

module.exports = config;
