const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customConfig = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  testEnvironment: "jsdom",
  preset: "ts-jest",
  moduleNameMapper: {
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/utils/(.*)$": "<rootDir>/src/utils/$1",
  },
  esModuleInterop: true,
};

module.exports = createJestConfig(customConfig);
