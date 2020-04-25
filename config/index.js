const Sequelize = require('sequelize')

// const sequelize = new Sequelize('mysql://root:admin@localhost:3306/eflow')
const Op = Sequelize.Op

const sequelize = new Sequelize('mysql://t1onobqe6mrucc93:f5mpr3ph87m3nu8h@bmsyhziszmhf61g1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/oe38tvrn3wsb85iv')
// const sequelize = new Sequelize('mysql://root:spikey11@localhost:3306/eFLow')

module.exports = sequelize
