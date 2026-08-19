import Book from "../models/book-model.js";

export const handleAddBook = async (req, res) => {
  try {
    let newBook = req.body;
    let newlyCreatedBook = await Book.create(newBook);

    if (!newlyCreatedBook) {
      return res.status(400).json({
        success: false,
        message: "Unable to create book",
      });
    }

    res.status(201).json({
      success: true,
      message: "Book Created",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

export const handleGetAllBooks = async (req, res) => {};
export const handleGetSingleBook = async (req, res) => {};
export const handleUpdateBook = async (req, res) => {};
export const handleDeleteBook = async (req, res) => {};
