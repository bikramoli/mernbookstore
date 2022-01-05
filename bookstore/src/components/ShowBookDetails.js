import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";



function ShowBooksDetails(){
    const { id } = useParams();
 const [state, setstate] = useState({
     book: {}
 })
    useEffect(()=>{
        
        axios
        .get(`http://localhost:8080/api/${id}` )
        .then(res => {
            setstate({
                book: res.data
            })
        })
    })
    console.log(state.book)
    
    
    return(
        <div className="ShowBookDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Book List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Book's Record</h1>
              <p className="lead text-center">
                  View Book's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
          <div>
      <table className="table table-hover table-dark">
       
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Title</td>
            <td>{ state.book.title }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Author</td>
            <td>{ state.book.author }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>ISBN</td>
            <td>{ state.book.isbn }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Publisher</td>
            <td>{ state.book.publisher }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Published Date</td>
            <td>{ state.book.published_date }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Description</td>
            <td>{ state.book.description }</td>
          </tr>
        </tbody>
      </table>
    </div>
          </div>

          {/* <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,book._id)}>Delete Book</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-book/${book._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Book
              </Link>
              <br />
            </div>

          </div> */}
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}

        </div>
      </div>

    )
}
export default ShowBooksDetails;