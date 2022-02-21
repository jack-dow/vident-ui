module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../../**/*.story.mdx', '../../**/*.story.@(ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    'storybook-addon-turbo-build',
    'storybook-dark-mode',
    'storybook-addon-outline',
    '@storybook/addon-viewport',
  ],
  babel: async (options) => ({
    ...options,
  }),
  typescript: {
    reactDocgen: 'none',
  },
};
