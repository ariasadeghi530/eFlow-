const { Model, STRING, INTEGER } = require('sequelize')
const sequelize = require('../config')
// 
class Upload extends Model { }

Upload.init({
  userid: {
    type: INTEGER,
    allowNull: false
  },
  fileid: {
    type: STRING,
    allowNull: false
  },
  path: {
    type: STRING,
    allowNull: false
  },
  contents: {
    type: STRING,
    allowNull: true
  }
}, { sequelize, modelName: 'upload' })

module.exports = Upload