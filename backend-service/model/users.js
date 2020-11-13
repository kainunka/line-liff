const mongoose = require('mongoose')
const schema = mongoose.Schema
const mongooseUniqueValidator = require('mongoose-unique-validator')

const users = new schema({
    userID: { type: String },
    displayName: { type: String },
    displayImage: { type: String },
    coupon: { type: Object },
    verifyRegister: { type: Boolean }
})

users.plugin(mongooseUniqueValidator)
module.exports = mongoose.model('Users', users)