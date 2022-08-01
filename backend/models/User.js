const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const mongooseValidationErrorTransform = require("mongoose-validation-error-transform");

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  postitionHeld: { type: String, required: false},
  imageUrl: { type: String, required: false},
  created_at : { type: Date, required: true, default: Date.now() },
  isAdmin: { type: Boolean, required: false, default: false}
});

userSchema.plugin(uniqueValidator);
userSchema.plugin(mongooseValidationErrorTransform);
module.exports = mongoose.model("User", userSchema);
