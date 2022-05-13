function errorResponder(error, req, res, next) {
  if (error.name === 'ClientError') {
    res.status(error.status).json({
      error: {
        type: error.type,
        status: error.status,
        message: error.message
      }
    })
  } else {
    next(error)
  }
}

module.exports = errorResponder
