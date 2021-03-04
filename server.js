// env
require('dotenv').config()

// express
const express = require('express')
const app = express()

// handlebars
const handlebars = require('express-handlebars')

// set engine
app.set('view engine', 'handlebars')

// static
app.use(express.static('public'))

// layouts 
app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts',
}))
 
app.get('/', function (req, res) {
    res.render('main', {layout : 'index'})
 })
 
app.listen(process.env.EXPRESS_PORT)