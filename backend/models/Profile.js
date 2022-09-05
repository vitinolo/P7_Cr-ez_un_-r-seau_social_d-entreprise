const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    imageUrl: { type: String, required: false},
    created_at : { type: Date, required: true, default: Date.now() },
    isAdmin: { type: Boolean, required: false, default: false}
});

module.exports = mongoose.model("Profile", profileSchema);
