// env
require('dotenv').config()

// open
const open = require('open');

// import path
const path = require("path");

// express
const express = require('express')
const app = express()

module.exports = {
    app,
    open,
}
const { launch } = require('./public/js/utils') // utils

// handlebars
const handlebars = require('express-handlebars')

// set engine
app.set('view engine', 'handlebars')

// static
app.use(express.static(path.join(__dirname, "public")));

// layouts 
app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}))

// route /
app.get('/', function (req, res) {
    res.render('main', {
        layout: 'index',
    })
})

// launch server
launch;