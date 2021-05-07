const express = require('express');
const route = express.Router()
const MovieCtrl =  require('../controllers/movie.controller')
route.get('/movie', MovieCtrl.getList)

module.exports = route