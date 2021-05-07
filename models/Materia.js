const mongoose = require ('mongoose')
const { Schema } = mongoose
const users = mongoose.model("users")
const materiaSchema = new Schema({
    name : { type : String, required : true},
    date :  { type : Date, default : Date.now},
    user: [{type : Schema.ObjectId, ref:"users", require:false}]
})

module.exports = mongoose.model ('materias',materiaSchema)
