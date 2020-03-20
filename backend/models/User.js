// models/User.js
const mongoose = require('../db/connection');

const UserSchema = new mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
  favorites: [
    {
      ref: "Recipe",
      type: mongoose.Schema.Types.ObjectId
    }
  ]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;