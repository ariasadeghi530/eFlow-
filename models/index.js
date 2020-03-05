const User = require('./User.js')
const Item = require('./Item.js')
const Message = require('./Message.js')
const Conversation = require('./Conversation.js')

Message.belongsTo(User)
Item.belongsTo(User)

module.exports = { User, Item, Message, Conversation }
