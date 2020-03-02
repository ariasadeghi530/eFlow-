const Sequelize = require('sequelize')

// sql://username:password@host:port/dbname
<<<<<<< HEAD
const sequelize = new Sequelize('mysql://root:admin@localhost:3306/eflow')
=======
const sequelize = new Sequelize('mysql://root:password@localhost:3306/eflow')
>>>>>>> 785787a2bfe12bd367ed88d732a60f65c134a22e

module.exports = sequelize
