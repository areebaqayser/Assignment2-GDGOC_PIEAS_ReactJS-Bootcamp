//import React from "react";
import "./App.css"; // Import the CSS
import HighRatedBooks from "./components/HighRatedBooks";
import BookDetails from "./components/BookDetails";
import FictionBooks from "./components/FictionBooks";
import BookAuthors from "./components/BookAuthors";

const App =() =>{
  return(
    <div>
      <h1>Library Manager</h1>
      <HighRatedBooks />
      <BookDetails />
      <FictionBooks />
      <BookAuthors />

    </div>
  );
};
export default App;
