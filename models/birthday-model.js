const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const birthdaySchema = new Schema({
  firstName: String,
  lastName: String,
  picture: String,
  day: Number,
  month: String,
  year: String,
  family: String,
  friend: String,
  coworker: String
});

const Birthday = mongoose.model('Birthday', birthdaySchema);

module.exports = Birthday;
