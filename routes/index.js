const router = require('express').Router()
let path = require('path')

router.use('/api', require('./userRoutes.js'))

module.exports = router