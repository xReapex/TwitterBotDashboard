// env
require('dotenv').config()

// import path
const path = require("path");

// express
const express = require('express')
const app = express()

// handlebars
const handlebars = require('express-handlebars')

// set engine
app.set('view engine', 'handlebars')

// static
app.use(express.static(path.join(__dirname,"public")));

// layouts 
app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}))
 
// route /
app.get('/', function (req, res) {
    res.render('main', {layout : 'index'})
 })
 
// run server 
app.listen(process.env.EXPRESS_PORT, function(){
    console.log('Serveur running on port', process.env.EXPRESS_PORT)
})