const { Model, INTEGER, STRING } = require('sequelize')
const sequelize = require('../config')
// 
class Conversation extends Model { }

Conversation.init({
  sellerId: {
    type: INTEGER,
    allowNull: false
  },
  buyerId: {
    type: INTEGER,
    allowNull: false
  },
  chatToken: {
    type: STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'conversation' })

module.exports = Conversation
