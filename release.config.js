module.exports = {
  branches: ["main"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
        releaseRules: [
          { type: "feat", release: "minor" },          // features bump minor
          { type: "fix", release: "patch" },           // fixes bump patch
          { type: "chore", release: "patch" },         // chore bumps patch too
          { breaking: true, release: "major" }         // breaking change bumps major
        ]
      }
    ],
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/exec",
      {
        prepareCmd: "mvn versions:set -DnewVersion=${nextRelease.version}"
      }
    ],
    [
      "@semantic-release/git",
      {
        assets: ["pom.xml", "CHANGELOG.md"],
        message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ],
    [
      "@semantic-release/github",
      {
        successComment: false,
        failComment: false
      }
    ]
  ]
};
