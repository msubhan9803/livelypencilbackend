const mongoose = require('mongoose');

const categorySchema = mongoose.Schema(
  {
    categoryName: {
      type: String,
      trim: true,
      unique: false,
    },
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef Category
 */
const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
