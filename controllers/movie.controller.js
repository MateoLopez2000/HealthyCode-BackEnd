const MovieCtrl = {}
const Movie = require('../models/Movie')
MovieCtrl.getList = async (req, res) =>{
   const Movies= await Movie.find()
   console.log(Movies)
   res.json (Movies)
}


module.exports = MovieCtrl