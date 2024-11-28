//import React from "react";
import Books from "../data/books";

const BookAuthors = () => {
  const authors = Books.map((book) => book.author);
  return (
    <div>
      <h2>Book Authors</h2>
      <ul>
        {authors.map((author, index) => (
          <li key={index}>{author}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookAuthors;
