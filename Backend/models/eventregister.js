const mongoose = require('mongoose');

const eventschema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  contact: String,
});

module.exports = mongoose.model('Eventregiter', eventschema);