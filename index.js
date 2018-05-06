const express = require('express');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');

const passport = require('passport');

// need to require this so it get's executed on startupB
require('./models/User');

require('./services/passport.js');

mongoose.connect(keys.mongoURI);

const app = express();

// to tell express it needs to make use of cookies
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

// immediately invoking the function in authRoutes
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
// listen on localhost:5000
console.log('Running on port: localhost:5000');
app.listen(PORT);
