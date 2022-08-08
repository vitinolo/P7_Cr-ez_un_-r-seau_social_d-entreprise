const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  userId: { type: String, required: true },
  postId: { type: String, required: true},
  body: { type: String, required: true },
  imageUrl: { type: String, required: false },
  created_at : { type: Date, required: true, default: Date.now() },
  likes: { type: Number, required: false, default: 0 },
  usersLiked: { type: [String], required: false },
});

module.exports = mongoose.model("Comment", commentSchema);
