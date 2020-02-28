const router = require('express').Router()
const { createUser, loginUser } = require('../controllers/userController.js')

// POST an user
router.post('/users', (req, res) => createUser(req.body, () => res.sendStatus(200)))
// GET an user
router.get('/users/login/:username/:password', (req, res) => loginUser([req.params.username, req.params.password], user => {

}))

module.exports = router