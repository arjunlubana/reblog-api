class ServerError extends Error {
  constructor(type, status, message, error, ...params) {
    super(params)
    this.name = this.constructor.name
    this.type = 'Internal Server Error'
    this.status = 500
    this.message = 'Something went wrong on our side'
    this.error = error
  }
}

module.exports = ServerError
