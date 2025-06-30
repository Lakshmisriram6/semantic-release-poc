// release.config.js

module.exports = {
  branches: ["main"],
  plugins: [
    // Analyze commit messages
    "@semantic-release/commit-analyzer",

    // Generate changelog.md
    "@semantic-release/release-notes-generator",

    // Update pom.xml version via Maven
    [
      "@semantic-release/exec",
      {
        prepareCmd: "mvn versions:set -DnewVersion=${nextRelease.version}"
      }
    ],

    // Commit updated files and push tag
    [
      "@semantic-release/git",
      {
        assets: ["pom.xml", "CHANGELOG.md"],
        message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ],

    // Create GitHub Release
    [
      "@semantic-release/github",
      {
        successComment: false,
        failComment: false
      }
    ]
  ]
};