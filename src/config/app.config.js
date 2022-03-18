const dotenv = require("dotenv");
const Joi = require("joi");
dotenv.config();

console.log(process.env.NODE_ENV)
const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid("production", "development", "test")
      .required(),
    PORT: Joi.number().default(3000),
    POSTGRESQL_URL: Joi.string().required().description("Postgresql DB url"),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  postgresql: {
    url: envVars.POSTGRESQL_URL,
  },
};
