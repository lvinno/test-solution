module.exports = {
  presets: ["@babel/env", "@babel/react"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@": "./src",
          "@Components": "./src/components",
          "@Public": "./public",
        },
      },
    ],
  ],
};
