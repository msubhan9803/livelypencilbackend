const mongoose = require('mongoose');

const { Schema } = mongoose;

const pageSchema = mongoose.Schema(
  {
    bookId: {
      type: Schema.Types.ObjectId,
      ref: 'Book',
    },
    pageNumber: {
      type: Number,
    },
    rawHtmlContent: {
      type: String,
      trim: true,
    },
    listOfMediaIds: [{ type: Schema.Types.ObjectId, ref: 'Media' }],
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef Page
 */
const Page = mongoose.model('Page', pageSchema);

module.exports = Page;
