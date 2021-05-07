const mongoose = require ('mongoose')
const { Schema } = mongoose
const movieSchema = new Schema({
    name : { type : String, required : true}
})

module.exports = mongoose.model ('movies',movieSchema)