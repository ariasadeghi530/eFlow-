const router = require('express').Router()
const cookieSession = require('cookie-session')
const sequelize = require('../config')
const srs = require('secure-random-string')
const { Op } = require("sequelize")
const axios = require('axios')
const md5 = require('md5')
const { User, Message, Conversation, FAQ, ForgotPassword, Upload, Item } = require('../models')

// GET ALL USERS
router.get('/allusers', (req, res) => {
  User.findAll()
    .then(users => {
      res.json(users)
    })
    .catch(e => console.log(e))
})

// GET USER
router.get('/user/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(user => {
      res.json(user)
    })
    .catch(e => console.log(e))
})

// DELETE USER
router.get('/users/delete/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => {
      res.sendStatus(200)
    })
    .catch(e => console.log(e))
})

// UPDATE USER
router.post('/users/update/:id', (req, res) => {
  User.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(() => {
      res.sendStatus(200)
    })
    .catch(e => console.log(e))
})

router.get('/users/count', (req, res) => {
  User.count()
    .then(count => {
      res.end(count.toString())
    })
    .catch(e => console.log(e))
})

// ITEM COUNT
router.get('/items/count', (req, res) => {
  Item.count()
    .then(count => {
      res.end(count.toString())
    })
    .catch(e => console.log(e))
})

// CREATE USER
router.post('/users/new', (req, res) => {
  req.body.password = md5(req.body.password)
  User.create(req.body)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(e => console.log(e))
})

module.exports = router