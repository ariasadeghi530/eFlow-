const db = require('../config/db.js')
const md5 = require('md5')

const user = {
  createUser(user, cb) {
    user.password = md5(user.password)
    db.query('INSERT INTO users SET ?', user, err => {
      if (err) { console.log(err) }
      cb()
    })
  },
  loginUser(user, cb) {
    let username = user[0]
    let password = md5(user[1])
    console.log(username, password)
    db.query('SELECT * FROM users WHERE ? AND ?', [{ username: username }, {password: password}], (err, data) => {
      if (err) { console.log(err) }
      cb(data)
    })
  }
}

module.exports = user