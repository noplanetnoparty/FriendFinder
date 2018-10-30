var express = require('express')
var path = require('path')
var api = require('./app/routing/apiRoutes')
var html = require('./app/routing/htmlRoutes')

var app = express()
var PORT = process.env.PORT || 8080;

app.use(api)
app.use(html)


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});