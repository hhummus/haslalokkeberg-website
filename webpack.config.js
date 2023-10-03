export const module = {
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  rules: [
    {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    },
  ],
};
export const resolve = {
  extensions: [".tsx", ".ts", ".js"],
};
export const output = {
  filename: "bundle.js",
};
