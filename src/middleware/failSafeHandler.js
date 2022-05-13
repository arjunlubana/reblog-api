function failSafeHandler(error, req, res, next) {
  res.status(error.status).json({
    error: {
      type: error.type || error.code,
      status: error.status,
      message: error.message
    }
  })
}

module.exports = failSafeHandler
