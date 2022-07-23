const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  text: { type: String, required: true },
  imageUrl: { type: String, required: true }
});

module.exports = mongoose.model("Profile", profileSchema);