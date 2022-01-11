const mongoose = require('mongoose')

const Notif = mongoose.Schema({
    name: { type: String },
    yelling: { type: String }
}, { timestamps: true })

module.exports = mongoose.model("notification", Notif)
