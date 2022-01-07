const User = require("../models/user")


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
    const {email, password} = req.body
    User.findOne({email}, (err, user)=>{
            if(!user || err){
                res.statue(400).json({err: "User doesnot exist"})
            }
    })
}