const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
  res.send("Reblog API homepage")
})

module.exports = router