const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
      breed: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'please add a breed']
      },
      description: {
        type: String,
      },
      temperament: {
        type: String,
      },
      origin: {
        type: String,
      },
      life_span:{
        type: String,
      },
      friendliness:{
        type: Number,
      },
      intelligence:{
        type: Number
      }

})

const Cat = mongoose.model('Cat', catSchema)
module.exports = Cat;