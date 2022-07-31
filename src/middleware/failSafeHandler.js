function failSafeHandler(error, req, res, next) {
  res.status(500).json({
    error: {
      type: error.type || error.code,
      status: error.status,
      message: error.message
    }
  })
}

module.exports = failSafeHandler
