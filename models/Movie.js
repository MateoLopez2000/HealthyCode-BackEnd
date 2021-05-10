const mongoose = require('mongoose');
const { Schema } = mongoose;
const movieSchema = new Schema({
  name: { type: String, required: true },
  descripcion: { type: String, required: true },
  genero: { type: String, required: true },
  fecha: { type: String, required: true },
});

module.exports = mongoose.model('movies', movieSchema);
