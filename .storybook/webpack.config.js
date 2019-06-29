const path = require('path')
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  config.resolve.alias['@'] = path.resolve(__dirname, '../src')

  // Return the altered config
  return config
}
