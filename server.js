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

app.get('/login', (req, res) => {
  res.render('login')
})

app.get('/register', (req, res) => {
  res.render('register')
})

app.get('/collections', (req, res) => {
  res.render('collections')
})


app.get('/', (req, res) => {
  res.render('home')
})

app.get('/products', (req, res) => {
  res.render('products')
})

app.get('/profile', (req, res) => {
  res.render('profile')
})

sequelize.sync() //or .authenticate()
  .then(() => app.listen(3000))
  .catch(e => console.log(e))
