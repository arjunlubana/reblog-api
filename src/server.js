const app = require('./app')
const { port } = require('./config/app.config')

// Start server
app.listen(port, () => {
  console.log(`Server is live on port ${5000}`)
})
