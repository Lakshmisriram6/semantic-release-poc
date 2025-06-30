module.exports = {
  repositoryUrl: "https://x-access-token:${process.env.GL_TOKEN}@github.com/Lakshmisriram6/semantic-release-poc.git", 
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
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