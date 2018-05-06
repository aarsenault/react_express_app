// Figure out which set of credentials to return

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  // development env
  module.exports = require('./dev');
}
