
module.exports = {
    testEnvironment: "node",

    setupFilesAfterEnv: [
        "<rootDir>/tests/setup.js"
    ],

    testMatch: [
        "**/tests/**/*.test.js"
    ],
    collectCoverageFrom: [
        "src/**/*.js"
    ],
    coverageReporters: [
        "text",
        "html",
        "lcov"
    ],
    coverageDirectory: "coverage"
};
