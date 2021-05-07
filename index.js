const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')
//Initialization
require('./database')
const app = express();

//Settings
app.set('Port',4000)
app.use(morgan ('dev'))
app.use(bodyparser.urlencoded({extended :true}))
app.use(bodyparser.json())

//Routes
app.use('/api/',require('./routes/person.route'))
app.use('/api/',require('./routes/materia.route'))
app.use('/api/', require('./routes/movie.route'))

app.listen(app.get('Port'), () => {
    console.log(`server on port 4000 `)
});