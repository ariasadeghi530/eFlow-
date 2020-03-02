const { Model, STRING, INTEGER } = require('sequelize')
const sequelize = require('../config')
// 
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
  sell_date: {
    type: STRING,
    allowNull: false
  },
  location: {
    type: STRING,
    allowNull: false
  },
  owner_id: {
    type: INTEGER,
    allowNull: false
  }
}, { sequelize, modelName: 'item' })

module.exports = Item
