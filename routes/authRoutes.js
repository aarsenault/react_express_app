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

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
