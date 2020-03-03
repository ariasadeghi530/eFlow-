const Sequelize = require('sequelize')

// sql://username:password@host:port/dbname
const sequelize = new Sequelize('mysql://root:spikey11@localhost:3306/eflow')

module.exports = sequelize
