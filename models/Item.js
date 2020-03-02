const { Model, STRING, INTEGER, BOOLEAN, DECIMAL, DATE } = require('sequelize')
const sequelize = require('../config')
// 
class Item extends Model { }

Item.init({
  name: {
    type: STRING,
    allowNull: false,
  },
  description: {
    type: STRING,
    allowNull: false,
  },
  forSale: {
    type: BOOLEAN,
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
  PRICE: {
    type: DECIMAL,
    allowNull: false
  },
  soldDate: {
    type: DATE
  }
}, { sequelize, modelName: 'user' })

module.exports = Item