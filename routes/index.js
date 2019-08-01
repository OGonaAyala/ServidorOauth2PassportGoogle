var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET Google Authentication API. */
router.get(
  '/auth/google',
  passport.authenticate('google', {
    accessType: 'offline',
    scope: ['profile', 'email', 'https://www.googleapis.com/auth/drive.file'],
  }),
);
router.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: 'http://localhost:3000',
    session: false,
  }),
  function(req, res) {
    const token = req.user.token;
    const refreshToken = req.user.refreshToken;
    res.redirect(
      'http://localhost:3000/googleSucces#token=' +
        token +
        '&refreshToken=' +
        refreshToken,
    );
  },
);

module.exports = router;
