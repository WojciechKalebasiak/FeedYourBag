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
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      const existingUser = await User.findOne({ googleID: profile.id });
      if (existingUser) {
        done(null, existingUser);
      } else {
        const newUser = await new User({
          googleID: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
          avatar: profile.photos ? profile.photos[0].value : null
        }).save();
        done(null, newUser);
      }
    }
  )
);
passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: "/auth/facebook/callback",
      profileFields: ["id", "displayName", "emails", "photos"]
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ facebookID: profile.id });
      if (existingUser) {
        done(null, existingUser);
      } else {
        const newUser = await new User({
          facebookID: profile.id,
          name: profile.displayName,
          email:profile.emails[0].value,
          avatar:profile.photos ? profile.photos[0].value : null
        }).save();
        done(null, newUser);
      }
    }
  )
);
