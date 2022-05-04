var ManagementClient = require("auth0").ManagementClient;
const { domain, clientId, clientSecret } = require("../config/auth0.config");

var auth0 = new ManagementClient({
  domain,
  clientId,
  clientSecret,
});

async function fetchUser(id) {
  const user = await auth0.getUser(id);
  return user;
}

module.exports = { fetchUser };
