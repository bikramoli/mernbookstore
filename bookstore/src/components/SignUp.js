import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


function SignUp(){
    const navigate = useNavigate();
   const [state, setstate] = useState({
       name:"",
       email:"",
       password:"",
       errorMessage:"",
       isSuccess: false,
       show: false
   })
   
   const {name, email, password,isSuccess,errorMessage,show} = state
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
           name: name,
           email: email,
           password: password
       }
       
       axios.post("http://localhost:8080/api/signup", data)
       .then(res => {
            console.log(res.status)
            console.log(res.data)
           setstate({
               ...state,
               name: "",
               email:"",
               password: "",
               errorMessage: "User sign up successfully",
               isSuccess: true,
               show: true,
           })
           setTimeout(function(){
                setstate({ show: false})
                // navigate("/signin")
           },3000)
       })
       .catch(error => {
        console.log(error);
      })         
   }
    const ErrorPage = ()=>{
      return(
        <button className={isSuccess ? "btn btn-primary btn-lg btn-block":""}> {errorMessage}</button>
      )
    }
    return(
        
        <section className="vh-100">
         {show?<ErrorPage/>:""}
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image"/>
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>

               <div className="form-outline mb-4">
                  <input type="text" 
                  name="name"
                  id="form1Example13" 
                  placeholder="Name" 
                  className="form-control form-control-lg"
                  onChange={handleChange} 
                  value={name}/>
                </div>

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
      
             
                <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={handleClick}>Sign up</button>
      
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>
      
                <p>Don't have an account? <a href="/signin" className="link-info">Login here</a></p>
      
              </form>
            </div>
          </div>
        </div>
      </section>
        
    )
}
export default SignUp;