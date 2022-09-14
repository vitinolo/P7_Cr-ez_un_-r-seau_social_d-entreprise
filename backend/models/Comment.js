const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  userId: { type: String, required: true },
  postId: { type: String, required: false},
  body: { type: String, required: true },
  imageUrl: { type: String, required: false },
  created_at : { type: Date, required: false, default: Date.now() },

});

module.exports = mongoose.model("Comment", commentSchema);
