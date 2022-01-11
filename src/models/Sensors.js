const mongoose = require('mongoose')

const Finger = mongoose.Schema({
    thumb: { type: String },
    index: { type: String },
    middle: { type: String },
    ring: { type: String },
    small: { type: String }
})

const Sensors = mongoose.Schema({
    email: { type: String },
    name: { type: String },
    x: { type: String }
    y: { type: String },
    z: { type: String },
    finger: [Finger]
})

module.exports = mongoose.model("sensors", Sensors)
