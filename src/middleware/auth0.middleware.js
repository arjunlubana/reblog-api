const { auth } = require('express-oauth2-jwt-bearer')
const { audience, issuerBaseURL } = require('../config/auth0.config')

const checkJwt = auth({ audience, issuerBaseURL, timeoutDuration: 30000 })

module.exports = checkJwt
