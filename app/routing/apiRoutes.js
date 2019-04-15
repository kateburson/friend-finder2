var friends = require('../data/friends.js');

module.exports = function(app) {

  app.get('/api/friends', function(req, res) {
      res.json(friends);
  });

  app.post('/api/friends', function(req, res) {
    var match = {
      name: '',
      photo: ''
    };

    match(req);
    res.json(match);

    // friends.push(req.body);

    function match(req) {
      newFriend = req.body;
      var difference = 40;
      for(var i = 0; i < friends.length; i++) {
        var newFriendSum = newFriend.scores.reduce((a,b) => a + b, 0);
        var friendSum = friends[i].scores.reduce((a,b) => a + b, 0);
        var diff = Math.abs(newFriendSum - friendSum);
        if(diff < difference) {
          return (
            match.name = friends[i].name,
            match.photo = friends[i].photo
          );
        } else {
          console.log('no match');
        }
      } 
    }

  });
  
};
