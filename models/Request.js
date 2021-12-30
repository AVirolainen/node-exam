const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    city: {type: String, required: true},
    date: {type: String, required: true},
})  

module.exports = model('Request', schema)