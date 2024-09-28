module.exports = {
  // Type check TypeScript files
  '(apps|packages)/**/*.(ts|tsx)': () => 'npm run type-check',

  // Lint then format TypeScript and JavaScript files
  '(apps|packages)/**/*.(ts|tsx|js)': (filenames) => [
    `npx prettier --write ${filenames.join(' ')}`,
  ],
};
