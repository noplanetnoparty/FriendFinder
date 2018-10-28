var express = require('express')
var path = require('path')
var api = require('./apiRoutes')
var html = require('./htmlRoutes')

var app = express()



app.use(api)
app.use(html)
