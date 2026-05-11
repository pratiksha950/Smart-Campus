import Review from "../model/Review.js";

// ➕ ADD REVIEW
export const postReview = async (req, res) => {
  try {
    const { name, rating, text } = req.body;

    if (!name || !rating) {
      return res.json({
        success: false,
        message: "Name and rating are required",
      });
    }

    if (rating < 1 || rating > 5) {
      return res.json({
        success: false,
        message: "Rating must be between 1 and 5",
      });
    }

    const review = await Review.create({
      name,
      rating,
      text: text || "",
    });

    res.json({
      success: true,
      data: review,
      message: "Review added successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Error saving review",
    });
  }
};

// 📥 GET ALL REVIEWS
export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      data: reviews,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Error fetching reviews",
    });
  }
};
