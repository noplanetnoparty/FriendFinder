// Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page. 

var express = require('express')

var router = express.Router()

router.get('/survey', function (req, res) {
  res.send('home.html')
})

module.exports = router