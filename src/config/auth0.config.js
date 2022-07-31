if (process.env.NODE_ENV !== 'production') {
  const dotenv = require('dotenv')
  dotenv.config()
}

module.exports = {
  domain: "reblog.us.auth0.com",
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  audience: process.env.AUTH0_AUDIENCE,
  issuer: process.env.AUTH0_ISSUERBASEURL,
  jwksUri: process.env.JWKS_URI
}
