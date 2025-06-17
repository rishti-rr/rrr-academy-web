const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"]
  },
  instructor: {
    type: String,
    required: [true, "Instructor name is required"]
  },
  price: {
    type: Number,
    required: [true, "Price is required"]
  },
  image: {
    type: String,
    required: [true, "Image URL is required"]
  },
  description: {
    type: String,
    required: [true, "Description is required"]
  },
  rating: {
    type: Number,
    required: [true, "Rating is required"],
    min: 0,
    max: 5
  }
}, { timestamps: true });

module.exports = mongoose.model("Course", courseSchema);
