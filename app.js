const express = require ('express');
const mongoose = require ('mongoose')

const App = express();
require("dotenv").config();

const db = process.env.db;


//db
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
.then(()=>{console.log("Database connetion successfull")})


App.get("/", (req, res)=>{
    res.send("hello world..!!!")
})
const PORT = process.env.PORT || 3000;
App.listen(PORT, ()=>{
    console.log(`App running on ${PORT}`)
})