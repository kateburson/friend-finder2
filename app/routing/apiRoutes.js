var friends = require('../data/friends.js');
console.log('friends:', friends);

module.exports = function(app) {

  app.get('/api/friends', function(req, res) {
      res.json(friends);
  });

  app.post('/api/friends', function(req, res) {
    let bestMatch;
    let currentBestScore = 100;
    const newFriend = req.body;

    for(let i = 0; i < friends.length; i++) {
      let sum = 0;
      for(let j = 0; j < newFriend.scores.length; j++) {
        sum += Math.abs(newFriend.scores[j] - friends[i].scores[j]);
        console.log('Sum:', sum);
        if(sum < currentBestScore) {
          console.log('best score:',currentBestScore);
          currentBestScore = sum;
          bestMatch = friends[i];
          console.log(bestMatch);
          res.send(bestMatch);
        } else {
          res.send('No match :(');
        }
      };
    }
  });
}

