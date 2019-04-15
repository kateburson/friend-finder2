const path = require("path");

module.exports = function(app) {
  // home page route
  app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname, '../public/home.html'));
  });

  // survey route
  app.get('/survey', function(req, res) {
      res.sendFile(path.join(__dirname, '../public/survey.html'));
  });

  // catch-all route
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
};
