const express = require('express');
require('./services/passport.js');

const app = express();

// immediately invoking the function in authRoutes
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
// listen on localhost:5000
console.log('Running on port: localhost:5000');
app.listen(PORT);
