const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"]
  },
  author: {
    type: String,
    required: [true, "Author is required"]
  },
  price: {
    type: Number,
    required: [true, "Price is required"]
  },
  image: {
    type: String,
    required: [true, "Image is required"]
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

module.exports = mongoose.model("Book", bookSchema);
