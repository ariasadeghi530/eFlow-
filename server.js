const express = require('express')
const { join } = require('path')
const app = express()
const axios = require('axios')
const sequelize = require('./config')
const cookieSession = require('cookie-session')

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'jsx')

app.engine('jsx', require('express-react-views').createEngine())
app.use(require('./routes'))

app.get('/login', (req, res) => {
  if (req.session.isLoggedin === true) {
    res.render('home')
  } else {
    res.render('login')
  }
})

app.get('/register', (req, res) => {
  if (req.session.isLoggedin === true) {
    res.render('home')
  } else {
    res.render('register')
  }
})

app.get('/chat', (req, res) => {
  if (req.session.isLoggedin === true) {
  res.render('userchat')
}else {
  res.render('login')
}
})

app.get('/collections', (req, res) => {
  if (req.session.isLoggedin === true) {
    res.render('collections')
  }else{
    res.render('login')
  }
})

app.get('/', (req, res) => {
  if (req.session.isLoggedin===true){
    res.render('home',
      {
        whatsHot: `What's Hot`,
        whatsNew: `What's New`
      })
  }else{
    res.render('login')
  }
})

app.get('/products', (req, res) => {
  if (req.session.isLoggedin === true) {
  res.render('products')
  } else {
    res.render('login')
  }
})

app.get('/profile', (req, res) => {
if (req.session.isLoggedin === true) {
  res.render('profile')
}else {
  res.render('login')
}
})

sequelize.sync() //or .authenticate()
  .then(() => app.listen(3000))
  .catch(e => console.log(e))
