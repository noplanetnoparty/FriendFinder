// Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

var express = require('express')

var router = express.Router()

router.get('/api/friends', function (req, res) {
  // Do a thing
  res.send('json of all possible friends')
})

module.exports = router