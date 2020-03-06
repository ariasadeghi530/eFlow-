const router = require('express').Router()
const sequelize = require('../config')
const Item = require('../models/Item.js')


// POST an item
router.post('/items', (req, res) => {
  Item.create(req.body)
    .then(() => {
      console.log('Item created')
      res.sendStatus(200)
    })
    .catch(e => console.log(e))
})

// GET all items
router.get('/items', (req, res) => {
  Item.findAll()
    .then(items => {
      console.log(items)
      console.log('poop')
      res.sendStatus(200)
    })
    .catch(e => console.log(e))
})

// Get One Item
router.get('/items/:id', (req, res) => {
  Item.findOne({where: {id: req.params.id}})
    .then(item => {
      res.json(item)
    })
})

// Get Item By Category
router.get('/items/category/:name', (req, res) => {
  Item.findAll({where: {category: req.params.name}})
    .then(catResult => {
      res.json(catResult)
    })
    .catch(e => console.log(e))
})

router.put('/items/:id', (req,res) => {
  Item.update( req.body, {where: {id: req.params.id}})
  .then(() => {
    console.log('poopoo')
    res.sendStatus(200)
  })
  .catch(e => console.log(e))
})

router.delete('/items/:id', (req, res) => {
  Item.destroy({where: { id: req.params.id }})
  .then(() => {
    console.log('peepee')
    res.sendStatus(200)
  })
  .catch(e => console.log(e))
})

module.exports = router