import express from "express";
import {
  handleAddBook,
  handleDeleteBook,
  handleGetAllBooks,
  handleGetSingleBook,
  handleUpdateBook,
} from "../controllers/book-controller.js";
const router = express.Router();

//! Routes related to books
router.get("/all-books", handleGetAllBooks);
router.get("/book/:id", handleGetSingleBook);
router.post("/add-book", handleAddBook);
router.put("/update-book/:id", handleUpdateBook);
router.delete("/delete-book/:id", handleDeleteBook);

export default router;
