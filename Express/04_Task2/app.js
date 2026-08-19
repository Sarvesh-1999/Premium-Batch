import express from "express";

const Books = [
  {
    id: 1,
    title: "Book 1",
  },
  {
    id: 2,
    title: "Book 2",
  },
];

const app = express();
const PORT = 9000;

//! MIDDLEWARE
app.use(express.json());

//! ROUTES
//---> GET /  ====> Welcome
app.get("/", (req, res) => {
  res.send("Welcome");
});

//---> GET /books  ====> [{},{}] in json
app.get("/books", (req, res) => {
  try {
    res.status(200).json({ data: Books });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error });
  }
});

//---> POST /add-book
app.post("/add-book", (req, res) => {
  try {
    let { title } = req.body; // { title: 'QSP' }
    let newBook = {
      id: Books.length + 1,
      title,
    };
    Books.push(newBook);
    res.status(200).json({ message: "Book Added" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Unable to add Book" });
  }
});

//---> GET /book/:id
app.get("/book/:id", (req, res) => {
  const bookId = parseInt(req.params.id); // {id : '1'}
  let book = Books.find((ele) => ele.id === bookId);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.status(200).json({ message: "Book Found", data: book });
});

//---> DELETE /delete-book/:id
app.delete("/delete-book/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  let index = Books.findIndex((ele) => ele.id === bookId);
  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }
  Books.splice(index, 1);
  res.status(200).json({
    message: "book deleted",
  });
});

//---> PUT /edit-book/:id
app.put("/edit-book/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title } = req.body; // {title : "updated Value"}

  // console.log("ID is", bookId);
  // console.log("Updated Value is", title);

  let bookToBeEdited = Books.find((ele) => ele.id === bookId);
  bookToBeEdited.title = title;

  res.status(200).json({
    message: "Book updated successfully",
    book: bookToBeEdited,
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Server started at", PORT);
});
