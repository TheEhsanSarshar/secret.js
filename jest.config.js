/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testTimeout: 30_000,
  modulePathIgnorePatterns: ["scripts/SecretNetwork", "dist"],
};
