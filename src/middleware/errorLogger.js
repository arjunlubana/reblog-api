function errorLogger(error, req, res, next){
	console.error(error);
	next(error)
}

module.exports = errorLogger;