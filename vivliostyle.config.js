const fs = require('fs')
const recipes = fs.readdirSync('src').map(recipe => `src/${recipe}`);

// @ts-check
/** @type {import('@vivliostyle/cli').VivliostyleConfigSchema} */
const vivliostyleConfig = {
  image: 'ghcr.io/vivliostyle/cli:8.6.0',
  entry: recipes,
  output: [ './build/recipes.pdf' ],
  workspaceDir: 'build', // directory which is saved intermediate files.
  // toc: true, // whether generate and include ToC HTML or not, default to 'false'.
  theme: '@vivliostyle/theme-techbook',
};

module.exports = vivliostyleConfig;
