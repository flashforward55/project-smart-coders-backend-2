const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      min: 1,
      max: 5,
      default: 1,
      required: true,
    },
    comment: {
      type: String,
      maxLength: 250,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Review = mongoose.model('review', reviewSchema);

module.exports = Review;
