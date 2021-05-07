
const express = require('express');
const route = express.Router()
const MateriaCtrl =  require('../controllers/materia.controller')
route.get('/materia', MateriaCtrl.getList)

route.post('/materia', MateriaCtrl.saveMateria)

module.exports = route