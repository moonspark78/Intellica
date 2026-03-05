export default {
  testEnvironment: "node",
  setupFilesAfterEnv: ["./tests/setup.js"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "controllers/**/*.js",
    "middleware/**/*.js"
  ]
};