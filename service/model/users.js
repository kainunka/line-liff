const mongoose = require('mongoose')
const schema = mongoose.Schema
const mongooseUniqueValidator = require('mongoose-unique-validator')

const users = new schema({
    userID: { type: String },
    displayName: { type: String },
    displayImage: { type: String },
    detail: { type: Object },
    coupon: { type: Object },
    profilePoint: { type: Number },
    verifyRegister: { type: Boolean }
})

users.plugin(mongooseUniqueValidator)
module.exports = mongoose.model('Users', users)