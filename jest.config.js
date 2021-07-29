module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/test/mocks/fileMock.js",
    "\\.(css|scss)$": "<rootDir>/node_modules/jest-css-modules",
  },
  transform: { "\\.js$": "babel-jest" },
  setupFilesAfterEnv: ["<rootDir>/src/test/setupTests.js"],
};
