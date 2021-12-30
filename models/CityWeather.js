const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    city: {type: String, required: true, unique: true},
    dateAdded: {type: String, required: true},
    info: {type: Object, required: true},
})  

module.exports = model('CityWeather', schema)