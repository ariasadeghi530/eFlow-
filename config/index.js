const Sequelize = require('sequelize')


const sequelize = new Sequelize('mysql://c209p3iee3snfxhw:k1b6iv4if637owrc@nba02whlntki5w2p.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/q3p72mds4851vgnu')

const Op = Sequelize.Op

module.exports = sequelize
