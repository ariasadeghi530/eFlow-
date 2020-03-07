const express = require('express')
const { join } = require('path')
const app = express()
const axios = require('axios')
const md5 = require('md5')
const sequelize = require('./config')
const cookieSession = require('cookie-session')
const { User, Message, Conversation, FAQ, ForgotPassword, Upload } = require('./models')

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


//Render Reset Password View
app.get('/forgetPasswordReset/:token', (req, res) => {
  let token = req.params.token

  let found = ForgotPassword.findOne({
    where: {
      token: token
    },
    // Add order conditions here....
    order: [
      ['id', 'DESC']
    ]
  })
    .then(forgotPassword => {

      res.render('forgetpassword-reset', {
        userid: forgotPassword.userid,
        token: token
      })
    })
})

app.get('/admin', (req, res) => {
  if (req.session.isLoggedin === true) {
    if (req.session.perm===1){
      res.render('admindash')
    }else{
      res.render('home')
    }
  } else {
    res.render('login')
  }
})

//Reset password external link
app.put('/forgetPasswordReset/:user/:token', (req, res) => {
  let md5pass = md5(req.body.password)
 
  User.update({ password: md5pass }, { where: { id: req.params.user } })
    .then(() => {
      console.log('Password Updated')
    })
    .catch(e => console.log(e))
  res.sendStatus(200)
})

app.get('/newListing', (req, res) => {
  if(req.session.isLoggedin === true) {
    res.render('newItem')
  }else {
    res.render('login')
  }
})

sequelize.sync() //or .authenticate()
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(e => console.log(e))