const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      unique: false,
    },
    authorId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    coverImageUrl: {
      type: String,
    },
    numberOfPages: {
      type: Number,
    },
    listOfPageIds: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef Book
 */
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
