const PersonCtrl = {}
const Person = require('../models/Person')
PersonCtrl.getList = async (req, res) =>{
   const Persons= await Person.find()
   console.log(Persons)
   res.json (Persons)
}


PersonCtrl.savePerson = async (req, res) =>{
    console.log ( req.body)
    const name= req.body.name
    const lastName  = req.body.lastName
    const PersonObj = new Person ({name, lastName})
    await PersonObj.save()
    res.json({"response":"ok"})
}

PersonCtrl.updatePerson = async (req, res) => {
    await Person.updateOne({"name": "calculo" }, {'name':'calculo', "lastname" : 'calculo'})
    res.json({"response":"ok"})
}

PersonCtrl.deletePerson = async (req, res) => {
   
    await Person.remove({"name":"Node"})
    res.json({"response":"ok"})
}

module.exports = PersonCtrl