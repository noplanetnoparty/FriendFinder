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
  var newUser = req.body;
  // console.log(newUser);

  var newUserScores = newUser.scores
  newUserScores = newUserScores.map(Number);

  // console.log(newUserScores);

  var userScoreArray = [];


  var userTotal = 0

  newUserScores.forEach(function (x) {
    userTotal += x
  })
  console.log(userTotal)

  for (var i = 0; i < friends.length; i++) {
    var userScores = friends[i].scores
    userScores = userScores.map(Number);
    // console.log(userScores)

    var otherTotal = 0

    userScores.forEach(function (x) {
      otherTotal += x
    })
    // console.log(otherTotal)

    userScoreArray.push(otherTotal)
  }
  console.log(userScoreArray)

  function closest(array, num) {
    var i = 0;
    var minDiff = 100;
    var ans;
    for (i in array) {
      var m = Math.abs(num - array[i]);
      if (m < minDiff) {
        minDiff = m;
        ans = array[i];
      }
    }
    return ans;
  }

  var match = closest(userScoreArray, userTotal)
  console.log(match)
  var indexNum = userScoreArray.indexOf(match)

  friends.push(newUser);
  res.json(friends[indexNum])

})

// return friends.name
module.exports = router