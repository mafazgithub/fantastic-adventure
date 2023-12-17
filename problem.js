const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
  title: String,
  description: String,
  difficulty: String,
});

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;