const mongoose = require("mongoose");
const { Schema } = mongoose;
const Recipient = require("./Recipient");
const SurveySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  recipients: {
    type: [Recipient],
    required: true
  },
  yes: {
    type: Number,
    default: 0
  },
  no: {
    type: Number,
    default: 0
  },
  _owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  created: {
    type: Date,
    required: true
  },
  lastResponded: Date
});
module.exports = Survey = mongoose.model("surveys", SurveySchema);
