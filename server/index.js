const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const cookieSession = require("cookie-session");
const keys = require("./config/keys");
const passport = require("passport");
const mongoose = require("mongoose");
//Connect to mongo
mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);
mongoose.Promise = Promise;

//Pasport Config
require("./services/passport");
app.use(
  cookieSession({
    maxAge: 7 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Auth router
const auth = require("./routes/authRoutes");
app.use("/auth", auth);

//Api router
const api = require("./routes/apiRoutes");
app.use("/api", api);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
