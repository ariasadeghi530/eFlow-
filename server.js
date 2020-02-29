const express = require('express')
const { join } = require('path')
const app = express()
const sequelize = require('./config')

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(require('./routes'))


app.get('/register', (req, res) => {
  res.render('register')
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.get('/test', (req, res) => {
  res.render('login-reg-template')
})

app.get('/', (req, res) => {
  res.render('home')
})

sequelize.sync() //or .authenticate()
  .then(() => app.listen(3000))
  .catch(e => console.log(e))
