const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  text: { type: String, required: true },
  imageUrl: { type: String, required: true },
  likes: { type: Number, required: false, default: 0 },
  usersLiked: { type: [String], required: false },
});

module.exports = mongoose.model("Post", postSchema);
