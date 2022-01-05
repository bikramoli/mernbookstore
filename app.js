const express = require ('express');
const connectDB = require("./db");

const booksRoutes = require("./routes/api/books")
const App = express();
require("dotenv").config();

var cors = require('cors');

//db connection
connectDB();

// Init Middleware
App.use(express.json());

// cors
App.use(cors());

//routes middleware
App.use("/api", booksRoutes) 

const PORT = process.env.PORT || 3000;
App.listen(PORT, ()=>{
    console.log(`App running on ${PORT}`)
})