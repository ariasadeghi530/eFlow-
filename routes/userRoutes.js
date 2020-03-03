const router = require('express').Router()
const cookieSession = require('cookie-session')
const sequelize = require('../config')
const srs = require('secure-random-string')
const { Op } = require("sequelize")
const axios = require('axios')
const md5 = require('md5')

const { User, Message, Conversation } = require('../models')

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
      res.json({userId: req.session.userId})
    }else{
      res.json({})
    }
  }
})
// LOGOUT USER
router.get('/users/logout', (req, res) => {
  req.session = null
  res.end('logged out')
})
// GET LOGGED IN USER INFO
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
// CREATE CONVO
router.get('/chat/newconvo/:userid', (req, res) => {
  let newChatToken = srs()
  Conversation.create({ user1: parseInt(req.session.userId), user2: parseInt(req.params.userid), chatToken: newChatToken})
    .then(() => {
      res.sendStatus(200)
    })
    .catch(e => console.log(e))
})
// GET ALL USER's CONVERSATION
router.get('/chat/getconvos', (req, res) => {
  Conversation.findAll({
    where: {
      [Op.or]: [
        { user1: req.session.userId },
        { user2: req.session.userId }
      ]
    }
  })
    .then(convos => {
      res.json(convos)
    })
    .catch(e => console.log(e))
})

// GET USER BY ID
router.get('/users/getbyid/:searchid', (req, res) => {
  User.findOne({
    where: {
      id: req.params.searchid
    }
  })
    .then(user => {
      res.json(user)
    })
    .catch(e => console.log(e))
})

// SEND CHAT MESSAGE
router.get('/chat/new/:chatToken/:msg', (req, res) => {
  let chatToken = req.params.chatToken
  let msg = req.params.msg
  Message.create({sender: req.session.userId, text: msg, convoToken: chatToken})
    .then(() => {
      res.sendStatus(200)
    })
    .catch(e => console.log(e))
})

// GET ALL MESSAGES FOR CONVO
router.get('/chat/messages/:chatToken', (req, res) => {
  let chatToken = req.params.chatToken
  Message.findAll({where: {convoToken: chatToken}})
    .then(data => {
      res.json(data)
    })
    .catch(e => console.log(e))
})

module.exports = router