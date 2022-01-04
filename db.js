const mongoose = require ('mongoose');
require("dotenv").config();
const db = process.env.db;


const connectDB = async ()=>{
  try{ 
    await mongoose.connect(db, {
    UseNewUrlParser: true,
    useUnifiedTopology: true 
})

.then(()=>{console.log("Database connetion successfull")})
}catch(err){
    console.log(err)
}
  

}
module.exports = connectDB;
