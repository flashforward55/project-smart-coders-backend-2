const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 1,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
  },

  {
    versionKey: false,
    timestamps: true,
  }
);
const Review = mongoose.model('review', reviewsSchema);
module.exports = { Review };
