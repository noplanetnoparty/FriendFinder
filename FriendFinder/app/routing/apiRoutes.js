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
  var newFriend = req.body;
  console.log(newFriend);

  var userTotalArray = [];

  // for (var i =0; i < )

  newFriendTotal = 0
  for (var i = 0; i < newFriend.scores.length; i++) {
    newFriendTotal += parseInt(newFriend.scores[i]);
  }
})


module.exports = router