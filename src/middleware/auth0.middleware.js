const { expressjwt } = require('express-jwt')
const jwks = require('jwks-rsa')
const { audience, issuer } = require('../config/auth0.config')

var checkJwt = expressjwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://reblog.us.auth0.com/.well-known/jwks.json'
  }),
  audience,
  issuer,
  algorithms: ['RS256']
})

module.exports = checkJwt
