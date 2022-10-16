const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  body: { type: String, required: false },
  imageUrl: { type: String, required: false },
  created_at : { type: Date, required: true },
  likes: { type: Number, required: false, default: 0 },
  usersLiked: { type: [String], required: false },
});

module.exports = mongoose.model("Post", postSchema);
