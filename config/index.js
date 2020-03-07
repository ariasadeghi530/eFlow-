const Sequelize = require('sequelize')

const sequelize = new Sequelize('mysql://root:admin@localhost:3306/eflow')
// const sequelize = new Sequelize('mysql://nnkrvaq9e9rlcc55:jtkn6aeksjgx9671@izm96dhhnwr2ieg0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/zmf7l8rel1272z43')
// const sequelize = new Sequelize('mysql://root:spikey11@localhost:3306/eFLow')

module.exports = sequelize
