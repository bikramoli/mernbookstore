import axios from "axios";
import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import BookCard from "./BookCard";

function CreateBook(){
   const [books, setBooks] = useState([])
   
    console.log("PrintBook: " + books);
    let bookList;

    useEffect(()=>{
      axios 
      .get('http://localhost:8080/api/books')
      .then(res => {
          console.log(res.data)
          setBooks(res.data)
      })
    },[])

    if(!books) {
      bookList = "there is no book record!";
    } else {
      bookList = books.map((book, k) =>
        <BookCard book={book} key={k} />
      );
    }
    return(
        <>
          <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Books List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-book" className="btn btn-outline-warning float-right">
                + Add New Book
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {bookList}
          </div>
        </div>
      </div>

        </>
    )
}
export default CreateBook;