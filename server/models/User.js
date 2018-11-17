const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  googleID: {
    required: true,
    type: String,
    unique: true
  },
  name: {
    type: String,
    required: true
  }
});
const User = mongoose.model("users", UserSchema);
module.exports = User;
