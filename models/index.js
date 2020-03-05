const User = require('./User.js')
const Item = require('./Item.js')
const Message = require('./Message.js')
const Conversation = require('./Conversation.js')
const FAQ = require('./FAQ.js')
const ForgotPassword = require('./ForgotPassword.js')
const Upload = require('./Upload.js')

Message.belongsTo(User)
Item.belongsTo(User)

module.exports = { User, Item, Message, Conversation, FAQ, ForgotPassword, Upload }
