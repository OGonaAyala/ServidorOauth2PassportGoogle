var passport = require ("passport");
var GoogleStrategy = require ("passport-google-oauth").OAuth2Strategy;
//var passportDropboxOauth2 = require ("passport-dropbox-oauth2");

passport.serializeUser(function(user, done) {
 done(null, user);
});
passport.deserializeUser(function(user, done) {
 done(null, user);
});

passport.use(
  new GoogleStrategy(
  {
    clientID: "1011461723910-5l7nmlhno2me1ahd5jksfc4ti96n35ua.apps.googleusercontent.com",
    clientSecret: "B88yPjs8m-sQeiapqnK-fWDz",
    callbackURL: "http://localhost:4500/auth/google/callback"
  },
  function(accessToken, refreshToken, params, profile, done) {
    var userData = {
      email:profile.emails[0].value,
      name:profile.displayName,
      token:accessToken,
      refreshToken: refreshToken,
      expire_in: params.expires_in
    };
    done (null, userData);
  }
  ));

