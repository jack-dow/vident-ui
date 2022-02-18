module.exports = {
  stories: ['../../packages/src/**/*.stories.mdx', '../../packages/src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-a11y'],
  babel: async (options) => ({
    ...options,
  }),
  typescript: {
    reactDocgen: 'none',
  },
};
