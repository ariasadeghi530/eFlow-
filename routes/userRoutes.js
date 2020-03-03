const router = require('express').Router()
const cookieSession = require('cookie-session')
const sequelize = require('../config')
const User = require('../models/User.js')
const axios = require('axios')
const md5 = require('md5')

router.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))
// POST an user
router.post('/users', (req, res) => {
  req.body.password = md5(req.body.password)
  User.create(req.body)
    .then(() => {
      console.log('User created')
    })
    .catch(e => console.log(e))
})
// LOGIN an user
router.get('/users/login/:username/:password', (req, res) => {
  User.findOne({ where: { 
    username: req.params.username,
    password: md5(req.params.password)
   } })
    .then(user => {
      if (user === null){
        res.end('user not found')
      }else{
        axios.get(`https://api.ipify.org/?format=json`)
          .then(({ data }) => {
            req.session.userId = user.id
            req.session.isLoggedin = true
            req.session.ip = data.ip
            axios.get(`http://api.ipstack.com/${data.ip}?access_key=ccb8e026d1e52d9ae1861d591d4bdd28`)
              .then((locationData) => {
                req.session.location = [locationData.data.city, locationData.data.region_name, locationData.data.zip]
                console.log(req.session)
                res.end('logged in')
              })
              .catch(e => console.error(e))
          })
          .catch(e => console.error(e))
      }
    })
    .catch(e => console.log(e))
})
// CHECK IF USER IS LOGGED IN
router.get('/users/checklogin', (req, res) => {
  if (req.session===null){
    res.end('not logged in')
  }else{
    if (req.session.isLoggedin===true){
      res.end(`User_ID: ${req.session.userId}, logged`)
    }else{
      res.end('not logged in')
    }
  }
})
// LOGOUT USER
router.get('/users/logout', (req, res) => {
  req.session = null
  res.end('logged out')
})
// GET USER INFO BY ID
router.get('/users/getinfo', (req, res) => {
  User.findOne({
    where: {
      id: req.session.userId
    }
  })
    .then(user => {
      res.json(user)
    })
    .catch(e => console.log(e))
})

module.exports = router