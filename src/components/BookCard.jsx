//import React from "react";

const BookCard = ({ title, author, rating, genre }) => {
  return (
    
    <div className="book-card" style={{
        padding: "10px", 
        border: "1px solid #ddd",
        margin: "10px"
         }}>

      <h3>{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Rating:</strong> {rating}</p>
      <p><strong>Genre:</strong> {genre}</p>
    </div>
  );
};

export default BookCard;
