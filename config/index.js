const Sequelize = require('sequelize')

const sequelize = new Sequelize('mysql://root:admin@localhost:3306/eflow')

module.exports = sequelize
