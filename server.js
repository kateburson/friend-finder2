const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
  console.log("App listening on PORT http://localhost:" + PORT);
});

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);
