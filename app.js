const express = require ('express');
const connectDB = require("./db");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');

const booksRoutes = require("./routes/api/books");
const userRoutes = require("./routes/api/user");
const App = express();
require("dotenv").config();

var cors = require('cors');

//db connection
connectDB();

// Init Middleware
App.use(express.json());
App.use(bodyParser.json());
App.use(morgan('dev'));
App.use(cookieParser());
App.use(expressValidator());

// cors
App.use(cors());

//routes middleware
App.use("/api", booksRoutes) 
App.use("/api", userRoutes)

const PORT = process.env.PORT || 3000;
App.listen(PORT, ()=>{
    console.log(`App running on ${PORT}`)
})