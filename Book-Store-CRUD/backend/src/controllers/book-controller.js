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

export const handleGetAllBooks = async (req, res) => {
  try {
    let allBooks = await Book.find({});

    if (allBooks.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Books not available",
      });
    }

    res.status(200).json({
      success: true,
      message: "fetched all books",
      data: allBooks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

export const handleGetSingleBook = async (req, res) => {
  try {
    let bookID = req.params.id;
    let myBook = await Book.findById(bookID);

    if (!myBook) {
      res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book Found",
      data: myBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

export const handleUpdateBook = async (req, res) => {
  try {
    let bookID = req.params.id;
    let newBookData = req.body;

    let updatedBook = await Book.findByIdAndUpdate(bookID, newBookData, {
      new: true,
    });

    if (!updatedBook) {
      return res.status(400).json({
        success: false,
        message: "Unable to update",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book Updated",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};

export const handleDeleteBook = async (req, res) => {
  try {
    let bookID = req.params.id;
    let deletedBook = await Book.findByIdAndDelete(bookID);

    if (!deletedBook) {
      return res.status(400).json({
        success: false,
        message: "Unable to delete",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
};
