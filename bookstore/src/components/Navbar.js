import React, {useState} from 'react';
import {Link} from "react-router-dom";

function Navbar(){
    const [name, setName] = useState(localStorage.getItem('user'))
    return(
        <>
          <div className='container'>
              <div className='col'>
                  <ul className='row'>
                      <li className='col-sm-2' >Home</li>
                      <li className='col-sm-2'>Add book</li>
                      <li className='col-sm-2'>Home</li>
                      <li className='col-sm-2'>Add book</li>
                      <li className='col-sm-2'>{name}</li>
                  </ul>
              </div>
          </div>
        </>
    )
}
export default Navbar;