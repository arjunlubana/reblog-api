const ManagementClient = require('auth0').ManagementClient

const {
    domain,
    clientId,
    clientSecret,
  } = require('../config/auth0.config')

var auth0Manager = new ManagementClient({
    domain,
    clientId,
    clientSecret,
    scope: 'read:users update:users'
  })

module.exports = auth0Manager