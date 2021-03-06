import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

function CreateBook(){
   const navigate = useNavigate();
   const [state, setstate] = useState({
    title: '',
    isbn:'',
    author:'',
    description:'',
    published_date:'',
    publisher:''
   })
    const onChange = (e) => {
      const name = e.target.name
      setstate({
          ...state,
          [name]: e.target.value
      })
    }
    
    const onSubmit = (e) => {
      e.preventDefault();
      
      const data = {
        title: state.title,
        isbn: state.isbn,
        author: state.author,
        description: state.description,
        published_date: state.published_date,
        publisher: state.publisher
      };
      axios
        .post("http://localhost:8080/api/", data)
        .then(res => {
            res.json(data)
            setstate({
                ...state,
                title: '',
                isbn:'',
                author:'',
                description:'',
                published_date:'',
                publisher:''
              })
              setTimeout(function(){ 
                navigate("/signin")
           },2000)
              
        })
        .catch(error => {
            console.log(error.response.data.error);
        })
          
    }
    return(
        <>       
            <div className="CreateBook">
                <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                    <br />
                    <Link to="/" className="btn btn-outline-warning float-left">
                        Show BooK List
                    </Link>
                    </div>
                    <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Add Book </h1>
                    <p className="lead text-center">
                        Create new book
                    </p>

                    <form  onSubmit={onSubmit}>
                        <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Title of the Book'
                            name='title'
                            className='form-control'
                            value={state.title}
                            onChange={onChange}
                        />
                        </div>
                        <br />

                        <div className='form-group'>
                        <input
                            type='text'
                            placeholder='ISBN'
                            name='isbn'
                            className='form-control'
                            value={state.isbn}
                            onChange={onChange}
                        />
                        </div>

                        <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Author'
                            name='author'
                            className='form-control'
                            value={state.author}
                            onChange={onChange}
                        />
                        </div>

                        <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Describe this book'
                            name='description'
                            className='form-control'
                            value={state.description}
                            onChange={onChange}
                        />
                        </div>

                        <div className='form-group'>
                        <input
                            type='date'
                            placeholder='published_date'
                            name='published_date'
                            className='form-control'
                            value={state.published_date}
                            onChange={onChange}
                        />
                        </div>
                        <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Publisher of this Book'
                            name='publisher'
                            className='form-control'
                            value={state.publisher}
                            onChange={onChange}
                        />
                        </div>

                        <input
                            type="submit"
                            className="btn btn-outline-warning btn-block mt-4"
                        />
                    </form>
                </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default CreateBook;