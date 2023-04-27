const mongoose = require('mongoose');
const { PAGE_MEDIA_TYPES } = require('../utils/constants');

const pageMediaSchema = mongoose.Schema(
  {
    url: {
      type: String,
      trim: true,
      unique: false,
    },
    mediaSize: {
      type: String,
      trim: true,
      enum: Object.keys(PAGE_MEDIA_TYPES),
    },
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef PageMedia
 */
const PageMedia = mongoose.model('PageMedia', pageMediaSchema);

module.exports = PageMedia;
