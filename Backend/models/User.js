const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userid: String,
  username: String,
  email: { type: String, unique: true },
  contact: String,
  password: String
});

module.exports = mongoose.model('RegisteredUser', userSchema);
