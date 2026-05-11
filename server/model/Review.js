import { Schema, model } from "mongoose";

const ReviewSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    text: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Review = model("Review", ReviewSchema);

export default Review;
