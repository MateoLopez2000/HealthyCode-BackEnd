
const express = require('express');
const route = express.Router()
const PersonCtrl =  require('../controllers/person.controller')
route.get('/user', PersonCtrl.getList)

route.post('/user', PersonCtrl.savePerson)

route.delete('/user', PersonCtrl.deletePerson)

route.put('/user', PersonCtrl.updatePerson)

module.exports = route