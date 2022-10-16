const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  userId: { type: String, required: true },
  body: { type: String, required: true },
  postId: { type: String, required: true },
  created_at : { type: Date, required: true },
});

module.exports = mongoose.model("Comment", commentSchema);
