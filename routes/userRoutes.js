const router = require('express').Router()
const sequelize = require('../config')
const User = require('../models/User.js')
const md5 = require('md5')

// POST an user
router.post('/users', (req, res) => {
  req.body.password = md5(req.body.password)
  User.create(req.body)
    .then(() => {
      console.log('User created')
    })
    .catch(e => console.log(e))
})
// GET an user
router.get('/users/login/:username/:password', (req, res) => {
  User.findOne({ where: { 
    username: req.params.username,
    password: md5(req.params.password)
   } })
    .then(user => {
      if (user === null){
        console.log('user not found')
      }else{
        console.log(user)
      }
    })
    .catch(e => console.log(e))
})

module.exports = router