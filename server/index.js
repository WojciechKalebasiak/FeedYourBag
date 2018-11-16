const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const keys = require("./config/keys");
const mongoose = require("mongoose");
//Connect to mongo
mongoose.connect(keys.mongoURI);

//Pasport Config
require("./services/passport");

//Auth router
const auth = require("./routes/authRoutes");

app.use("/auth", auth);
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
