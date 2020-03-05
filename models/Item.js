const { Model, STRING, INTEGER, BOOLEAN } = require('sequelize')
const sequelize = require('../config')

class Item extends Model { }

Item.init({
  name: {
    type: STRING,
    allowNull: false
  },
  description: {
    type: STRING,
    allowNull: false
  },
  category: {
    type: STRING,
    allowNull: false
  },
  condition: {
    type: STRING,
    allowNull: false
  },
  price: {
    type: INTEGER,
    allowNull: false
  },
  location: {
    type: STRING,
    allowNull: false
  },
  sell_price: {
    type: INTEGER,
    defaultValue: null
  },
  sell_date: {
    type: STRING,
    allowNull: false
  },
  isSold: {
    type: BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  buyer: {
    type: STRING,
    defaultValue: null
  }

}, { sequelize, modelName: 'item' })

module.exports = Item
