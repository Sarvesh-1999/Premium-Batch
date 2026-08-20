import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    year: "",
    author: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Book:", book);

    let resp = await axios.post("http://localhost:9000/add-book", book);
    console.log(resp);

    alert(resp.data.message)
    navigate("/all")

    // Reset form
    setBook({
      title: "",
      year: "",
      author: "",
    });
  };

  return (
    <div>
      <h2>Add Book</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            placeholder="Enter book title"
          />
        </div>

        <div>
          <label>Year:</label>
          <input
            type="number"
            name="year"
            value={book.year}
            onChange={handleChange}
            placeholder="Enter publication year"
          />
        </div>

        <div>
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            placeholder="Enter author name"
          />
        </div>

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
