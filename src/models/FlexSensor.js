const mongoose = require('mongoose')

const Flex = mongoose.Schema({
    email: { type: String },
    name: { type: String },
    value: { type: String }
})

module.exports = mongoose.model('flex_sensor', Flex)
