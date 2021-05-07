const MateriaCtrl = {}
const Materia = require('../models/Materia')


MateriaCtrl.getList = async (req, res) =>{
   const Materias= await Materia.find().populate('user')
   console.log(Materias)
   res.json (Materias)
}


MateriaCtrl.saveMateria = async (req, res) =>{
    console.log ( req.body)
    const name= req.body.name
    const MateriaObj = new Materia ({name})
    await MateriaObj.save()
    res.json({"response":"ok"})
}

module.exports = MateriaCtrl