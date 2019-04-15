const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, function() {
  console.log("App listening on PORT http://localhost:" + PORT);
});

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);
