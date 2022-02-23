const path = require('path');

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../../**/*.story.mdx', '../../**/*.story.@(ts|tsx)'],
  addons: ['@storybook/addon-a11y'],
  typescript: {
    reactDocgen: 'none',
  },
};
