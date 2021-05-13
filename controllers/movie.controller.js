const MovieCtrl = {}
const Movie = require('../models/Movie')
MovieCtrl.getList = async (req, res) =>{
   const Movies= await Movie.find()
   console.log(Movies)
   res.json (Movies)
}

MovieCtrl.findOnebyname = (req, res) => {
   Movie.find({
      name: {
         $regex: req.body.name, $options: 'i'
      },
   }).exec((err, movie) => {
     if (err) {
       res.status(500).send({ message: err });
       return;
     }
     if (!movie) {
       return res.status(404).send({ message: "Movie Not found." });
     }
     res.status(200).send({
       id: movie._id,
       name: movie.name,
       descripcion: movie.descripcion,
       genero: movie.genero,
       fecha: movie.fecha,
       imagen: movie.imagen,
     });
   });
 };
 MovieCtrl.findOnebyfilter = (req, res) => {
   Movie.find({
      fecha: {
         $gte: req.body.stardate,
         $lt: req.body.enddate,
          },
      name: {
         $regex: req.body.name, $options: 'i'
      },
   })
   .exec((err, movie) => {
     if (err) {
       res.status(500).send({ message: err });
       return;
     }
     if (!movie) {
       return res.status(404).send({ message: "Movie Not found." });
     }
     res.status(200).send({
       id: movie._id,
       name: movie.name,
       descripcion: movie.descripcion,
       genero: movie.genero,
       fecha: movie.fecha,
       imagen: movie.imagen,
     });
   });
 };

module.exports = MovieCtrl