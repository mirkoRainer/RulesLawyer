module.exports = {
    preset: "react-native",
    testEnvironment: "node",
    transformIgnorePatterns: ["node_modules/?!(@ui-kitten)"],
    transform: {
        "^.+\\.[jt]sx?$": "babel-jest",
    },
    collectCoverageFrom: ["**/*.{ts,tsx}", "!**/node_modules/**"],
};
