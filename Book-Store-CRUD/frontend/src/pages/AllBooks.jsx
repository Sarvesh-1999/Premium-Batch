import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  async function getAllBooks() {
    let resp = await axios.get("http://localhost:9000/all-books");
    console.log(resp);
    setBooks(resp.data.data);
  }

  useEffect(() => {
    getAllBooks();
  }, []);

  const handleDeleteBook = async (id) => {
    try {
      let resp = await axios.delete(`http://localhost:9000/delete-book/${id}`);
      alert(resp.data.message);
      getAllBooks()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h4>All Books</h4>

      {books.length === 0 ? (
        <p>No Books Available</p>
      ) : (
        books.map((ele) => {
          return (
            <div key={ele._id}>
              <h6>{ele.title}</h6>
              <p>{ele.author}</p>
              <p>{ele.year}</p>
              <button>Edit</button>
              <button onClick={() => handleDeleteBook(ele._id)}>Delete</button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default AllBooks;
