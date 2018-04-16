/*
 * Middleware for handling server errors
 */
export default [
  // 404
  (req, res, next) => {
    const status = 404
    const err = new Error(`ERROR ${status} Sorry can't find what you're looking for!`)
    err.status = status
    next(err)
  },
  // 500
  (err, req, res) => {
    console.log('UNKNOWN ERROR')
    console.log(err.stack)
    const status = err.status || 500
    res.status(status).send(err.message)
  }
]
