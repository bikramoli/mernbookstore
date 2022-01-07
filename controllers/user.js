const User = require("../models/user")
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

exports.signup = (req, res) => {
//   console.log("req.body", req.body);
  const user = new User(req.body)
  user.save((err, user)=> {
     if(err){
         return res.statue(400).json({
             err
         })
     }
     res.json({
         user
     });
  });
};

exports.signin = (req, res) => {
    //find the user based on email
    const {email, password} = req.body
    User.findOne({email}, (err, user)=>{
            if(!user || err){
                res.statue(400).json({err: "User doesnot exist"})
            } 
            //if user found then check email and password match
            

            //generate signed token with the help of user id & secre
             const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)
             //persist token as "t" with expire date
             res.cookie("t", token, {expire: new Date() +  9999})
    })
}