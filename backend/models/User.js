const mongoose = require('../db/connection');

const UserSchema = new mongoose.Schema({
  email: String,
  name: String,
  recipes: [
    {
      ref: "Recipe",
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;