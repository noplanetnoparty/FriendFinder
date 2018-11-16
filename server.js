var express = require('express')
var path = require('path')
var api = require('./FriendFinder/app/routing/apiRoutes')
var html = require('./FriendFinder/app/routing/htmlRoutes')

var app = express()
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(api)
app.use(html)


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});