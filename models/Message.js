const { Model, STRING, INTEGER, BOOLEAN } = require('sequelize')
const sequelize = require('../config')
// 
class Message extends Model { }

Message.init({
  sender: {
    type: INTEGER,
    allowNull: false
  },
  text: {
    type: STRING,
    allowNull: false
  },
  convoToken: {
    type: STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'message' })

module.exports = Message
