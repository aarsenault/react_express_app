const passport = require('passport'); // npm module

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      // scopes defined by API
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));
};
