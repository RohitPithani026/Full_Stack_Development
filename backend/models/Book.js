const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
  bookName: String,
  isbn: { type: String, unique: true },
  bookTitle: String,
  authorName: String,
  publisherName: String
});
module.exports = mongoose.model('Book', bookSchema);
