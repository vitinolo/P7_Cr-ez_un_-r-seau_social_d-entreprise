const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  userId: { type: String, required: true },
  body: { type: String, required: false },
  imageUrl: { type: String, required: false },
  created_at : { type: Date, required: false, default: Date.now() },
  likes: { type: Number, required: false, default: 0 },
  usersLiked: { type: [String], required: false },
});

module.exports = mongoose.model("Post", postSchema);
