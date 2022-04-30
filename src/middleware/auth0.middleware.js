const { auth } = require("express-oauth2-jwt-bearer");

const checkJwt = auth({
	audience: "https://reblog-api.herokuapp.com",
	issuerBaseURL: "https://reblog-api.herokuapp.com",
});

module.exports = checkJwt;
