module.exports = {
  format: {
    // Adding a custom format to show how to get an alias's name.
  },

  source: ["tokens/**/*.json"],
  platforms: {
    json: {
      buildPath: "dist/",
      files: [
        {
          destination: "tokens.json",
          format: "json/nested",
        },
      ],
    },
  },
};
