import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';

import CreateBook from './components/CreateBooks';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<ShowBookList/>} />
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/create-book' element={<CreateBook/>} />
          <Route path='/edit-book/:id' element={<UpdateBookInfo/>} />
          <Route path='/show-book/:id' element={<ShowBookDetails/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;