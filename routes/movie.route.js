const express = require('express');
const route = express.Router();
const MovieCtrl = require('../controllers/movie.controller');

route.get('/movie', MovieCtrl.getList);
route.post('/movie', MovieCtrl.MovieByName);
route.post('/findmovie', MovieCtrl.findOnebyname);
route.post('/findmoviefiltered', MovieCtrl.findOnebyfilter);
module.exports = route;
