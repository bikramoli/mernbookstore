import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


function SignIn(){
    const navigate = useNavigate();
   const [state, setstate] = useState({
    
       email:"",
       password:""
   })
   
   const { email, password} = state
   const handleChange = (e) =>{
        const name = e.target.name
        setstate({
            ...state,
            [name]:e.target.value
        })
   }
   const handleClick = (e) => {
     e.preventDefault()
       const data = {
           email: email,
           password: password
       }
       console.log(data)
       axios.post("http://localhost:8080/api/signin", data)
       .then(response => {
           response.json()
           setstate({
               email:"",
               password: ""
           })
           navigate("/signup")
       })
       .catch(error => {
        console.log(error);
      })

             
   }

    return(
        
        <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image"/>
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>

             

                <div className="form-outline mb-4">
                  <input type="text"
                  name="email" 
                  id="form1Example12" 
                  placeholder="Email" 
                  className="form-control form-control-lg" 
                  onChange={handleChange}
                  value={email}/>
                </div>
      
               
                <div className="form-outline mb-4">
                  <input type="text"
                  name="password" 
                  id="form1Example23" 
                  placeholder="Password" 
                  className="form-control form-control-lg" 
                  onChange={handleChange}
                  value={password}/>
                </div>
      
                <div className="d-flex justify-content-around align-items-center mb-4">
                 
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                      
                    />
                    <label className="form-check-label"> Remember me </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>
      
             
                <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={handleClick}>Login</button>
      
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>
      
                <p>Don't have an account? <a href="/signup" className="link-info">Register here</a></p>
      
              </form>
            </div>
          </div>
        </div>
      </section>
        
    )
}
export default SignIn;