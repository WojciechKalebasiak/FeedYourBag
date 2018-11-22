const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  googleID: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  facebookID: {
    type: String
  },
  email: {
    type: String
  },
  avatar: {
    type: String
  }
});
const User = mongoose.model("users", UserSchema);
module.exports = User;
