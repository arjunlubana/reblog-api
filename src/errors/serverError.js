class ServerError extends Error {
	constructor(type, status, message, error, ...params) {
		super(params);
		this.name = this.constructor.name;
		this.type = type;
		this.status = status;
		this.message = message;
		this.error = error;
	}
}

module.exports = ServerError;
