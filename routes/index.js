const router = require('express').Router()
let path = require('path')

router.use('/api', require('./userRoutes.js'))

// router.use('/api', require('./itemRoutes.js'))


module.exports = router