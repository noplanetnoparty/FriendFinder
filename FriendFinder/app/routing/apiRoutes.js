// Your `apiRoutes.js` file should contain two routes:

//    * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic. 

var express = require('express')
var router = express.Router()
var friends = require('../data/friends')


router.get('/api/friends', function (req, res) {
  // Display as JSON
  res.json(friends)
})


router.post("/api/friends", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  res.json(true);
  var newUser = req.body;
  // console.log(newUser);

  var newUserScores = newUser.scores
  newUserScores = newUserScores.map(Number);

  console.log(newUserScores);

  function totalScore() {
    var userTotal = 0

    newUserScores.forEach(function (x) {
      userTotal += x
    })
    console.log(userTotal)
  }
// console.log(userTotal)

  totalScore();
  // console.log(userTotal)

  for (var i = 0; i < friends.length; i++) {
    
  }

  // newUserTotal = 0
  // for (var i = 0; i < newUser.scores.length; i++) {
  //   newUserTotal += parseInt(newUser.scores[i]);
  // }
  friends.push(newUser);

})


module.exports = router