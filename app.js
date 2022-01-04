const express = require ('express');
const connectDB = require("./db");

const books = require("./routes/api/books")
const App = express();
require("dotenv").config();

//db connection
connectDB();

App.get("/", (req, res)=>{
    res.send("hello world..!!!")
})

//routes
App.use('/api/books', books) 

const PORT = process.env.PORT || 3000;
App.listen(PORT, ()=>{
    console.log(`App running on ${PORT}`)
})