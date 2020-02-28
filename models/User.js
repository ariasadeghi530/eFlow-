const { Model, STRING, INTEGER } = require('sequelize')
const sequelize = require('../config')
// 
class User extends Model { }

User.init({
  username: {
    type: STRING,
    allowNull: false
  },
  email: {
    type: STRING,
    allowNull: false
  },
  password: {
    type: STRING,
    allowNull: false
  },
  first_name: {
    type: STRING,
    allowNull: false
  },
  last_name: {
    type: STRING,
    allowNull: false
  },
  active: {
    type: INTEGER,
    allowNull: false
  },
  permissions: {
    type: INTEGER,
    allowNull: false
  }
}, { sequelize, modelName: 'user' })

module.exports = User