const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const keys = require("../config/keys");
const User = require("../models/User");
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    if (user) {
      done(null, user);
    }
  });
});
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleID: profile.id }).then(user => {
        if (user) {
          done(null, user);
        } else {
          new User({ googleID: profile.id, name: profile.displayName })
            .save()
            .then(user => done(null, user))
            .catch(err => done(err));
        }
      });
    }
  )
);
passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: "/auth/facebook/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ facebookID: profile.id }).then(user => {
        if (user) {
          done(null, user);
        } else {
          new User({ facebookID: profile.id, name: profile.displayName })
            .save()
            .then(user => done(null, user))
            .catch(err => done(err));
        }
      });
    }
  )
);