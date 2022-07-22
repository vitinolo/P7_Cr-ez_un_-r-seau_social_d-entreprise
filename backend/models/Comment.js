const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  userId: { type: String, required: true },
  text: { type: String, required: true },
  imageUrl: { type: String, required: true },
  likes: { type: Number, required: false, default: 0 },
  usersLiked: { type: [String], required: false },
});

module.exports = mongoose.model("Comment", commentSchema);
