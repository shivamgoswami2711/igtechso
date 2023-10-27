const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new mongoose.Schema(
  {
    // course: {
    //   type: Schema.Types.ObjectId,
    //   ref: "course",
    // },
    course: {
      type: String,
      ref: "course",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    rating: {
      type: Number,
      required: [true, "rateing is Empty"],
    },
    review: {
      type: String,
      required: [true, "review is Empty"],
    },
    images: {
      image_id: String,
      image_url: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("review", reviewSchema);
