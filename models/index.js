const User = require('./User.js')
const Item = require('./Item.js')
const Message = require('./Message.js')
const Conversation = require('./Conversation.js')
const FAQ = require('./FAQ.js')
const ForgotPassword = require('./ForgotPassword.js')
const Upload = require('./Upload.js')

Message.belongsTo(User)

User.hasMany(Item)
Item.belongsTo(User)
Item.hasMany(Upload)
Upload.belongsTo(Item)


module.exports = { User, Item, Message, Conversation, FAQ, ForgotPassword, Upload }
