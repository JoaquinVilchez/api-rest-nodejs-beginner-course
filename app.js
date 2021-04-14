'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const app = express()
const api = require('./routes')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//Motor de plantillas
app.engine('.hbs', hbs({
    defaultLayout: 'default',
    extname: '.hbs'
})) //Esto indica que los archivos con extension .hbs usen handlebar

app.set('view engine', '.hbs')
//Fin motor de plantillas

app.use('/api', api)
app.get('/login', (req,res)=>{
    res.render('login')
})
app.get('/', (req, res) => {
    res.render('product')
})

module.exports = app