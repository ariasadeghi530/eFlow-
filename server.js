const express = require('express')
const { join } = require('path')
const app = express()
const axios = require('axios')
const md5 = require('md5')
const sequelize = require('./config')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const cookieSession = require('cookie-session')
const { User, Message, Conversation, FAQ, ForgotPassword, Upload, Item } = require('./models')




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

app.get('/', (req, res) => {
  if (req.session.isLoggedin === true) {
    res.render('home',
      {
        whatsHot: `What's Hot`,
        whatsNew: `What's New`
      })
  } else {
    res.render('login')
  }
})

app.get('/chat', (req, res) => {
  if (req.session.isLoggedin === true) {
    res.render('userchat')
  } else {
    res.render('login')
  }
})

app.get('/searchCollections', (req, res) => {

  if (req.session.isLoggedin === true) {
    Item.findAll({ limit: 50, include: [Upload] })
      .then((items) => {
        res.render('searchCollections',
          {
            stuff: items,
            category: req.params.category
          })
      })
  } else {
    res.render('login')
  }
})

app.get('/searchCollections/:category/:searchText', (req, res) => {
  let categoryOption = req.params.category
  let categoryDisplay = ''
  if (req.params.category === 'All') {
    categoryOption = ['Electronics', 'Apparel', 'Automotive']
    categoryDisplay = 'All'
  }
  else {
    categoryDisplay = req.params.category
  }
  console.log(req.params.category, req.params.searchText)
  if (req.session.isLoggedin === true) {

    if (req.params.searchText !== 'EmptySearchStringParameter') {
      Item.findAll({
        where: {
          category: categoryOption,
          [Op.or]: [
            {
              name:
              {
                [Op.like]: '%' + req.params.searchText + '%'
              }
            },
            {
              description:
              {
                [Op.like]: '%' + req.params.searchText + '%'
              }
            }
          ]
        }, include: [Upload]
      })
        .then((items) => {
          console.log(items)
          res.render('searchCollectionsResult',
            {
              stuff: items,
              category: categoryDisplay
            })
        })
    }
    else {
      Item.findAll({ limit: 50, include: [Upload] })
        .then((items) => {
          console.log(items)
          res.render('searchCollectionsResult',
            {
              stuff: items,
              category: req.params.category
            })
        })
    }
  } else {
    res.render('login')
  }
})

app.get('/collections/:category', (req, res) => {
  if (req.session.isLoggedin === true) {
    Item.findAll({ where: { category: req.params.category }, include: [Upload] })
      .then((items) => {
        res.render('collections',
          {
            stuff: items,
            category: req.params.category
          })
      })
  } else {
    res.render('login')
  }
})

app.get('/products/:id', (req, res) => {
  if (req.session.isLoggedin === true) {
    Item.findOne({
      where: { id: req.params.id },
      include: [Upload]
    })
      .then((product) => {

        res.render('products',
          {
            prod: product
          })
      })

  } else {
    res.render('login')
  }
})



app.get('/profile', (req, res) => {
  if (req.session.isLoggedin === true) {
    res.render('profile')
  } else {
    res.render('login')
  }
})

app.get('/profile-edit', (req, res) => {
  if (req.session.isLoggedin === true) {
    res.render('profile-edit')
  } else {
    res.render('login')
  }
})

// ADMIN DASHBOARD
app.get('/admin', (req, res) => {
  if (req.session.isLoggedin === true) {
    if (req.session.perm === 1) {
      res.render('admindash',
        {
          js: '../admin/js/dash.js',
          adminid: req.session.userId
        })
    } else {
      res.render('home')
    }
  } else {
    res.render('login')
  }
})

// ADMIN USER MANAGEMENT
app.get('/admin/users', (req, res) => {
  if (req.session.isLoggedin === true) {
    if (req.session.perm === 1) {
      res.render('adminusers',
        {
          js: '../admin/js/users.js',
          adminid: req.session.userId
        })
    } else {
      res.render('home')
    }
  } else {
    res.render('login')
  }
})

// ADMIN NEW USER
app.get('/admin/newuser', (req, res) => {
  if (req.session.isLoggedin === true) {
    if (req.session.perm === 1) {
      res.render('adminnewuser',
        {
          js: '../admin/js/newuser.js',
          adminid: req.session.userId
        })
    } else {
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
  if (req.session.isLoggedin === true) {
    res.render('newItem')
  } else {
    res.render('login')
  }
})


sequelize.sync() //or .authenticate()
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(e => console.log(e))