import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide book title"],
      trim: true,
      maxLength: [100, "Title cannot exceed 100 characters"],
    },
    author: {
      type: String,
      required: [true, "Please provide book author"],
      trim: true,
    },
    year: {
      type: Date,
      required: [true, "Please provide book's published date"],
      min: [2000, "Publication year cannot be less than 2000"],
      max: [
        new Date().getFullYear(),
        "Publication year cannot exceed current year",
      ],
    },
  },
  { timestamps: true },
);

export default mongoose.model("Book", BookSchema);
