import React from "react";

function SignUp(){
    return(
        <>
         <section className="vh-100" style={{backgroundColor:"red"}}>
             <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6" style={{backgroundColor:"green"}}>
                        <div className="px-5">
                           <span className="h1">Logo</span>
                        </div>
                        <div>
                           <form>
                               <div className="form-outline mb-4">
                                  <input className="form-control form-control-lg" type="name" id="name" placeholder="Name"/> 
                               </div>   
                               <div className="form-outline mb-4">
                                  <input className="form-control form-control-lg" type="email" id="email" placeholder="Email"/> 
                               </div>
                               <div className="form-outline mb-4">
                                  <input className="form-control form-control-lg" type="password" id="password" placeholder="Password"/> 
                               </div>
                           </form>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        bikram
                    </div>
                </div>
             </div>
         </section>
        </>
    )
}
export default SignUp;