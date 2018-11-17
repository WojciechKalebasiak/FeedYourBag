const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  googleID: {
    type: String,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  facebookID: {
    type: String,
    unique: true
  }
});
const User = mongoose.model("users", UserSchema);
module.exports = User;
