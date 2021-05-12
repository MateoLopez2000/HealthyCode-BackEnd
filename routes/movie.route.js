const express = require('express');
const route = express.Router()
const MovieCtrl =  require('../controllers/movie.controller')
route.get('/movie', MovieCtrl.getList)
route.get('/findmovie', MovieCtrl.findOnebyname)
route.get('/findmoviefiltered', MovieCtrl.findOnebyfilter)
module.exports = route