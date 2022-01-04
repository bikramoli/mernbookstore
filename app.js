const express = require ('express');

const App = express();


App.get("/", (req, res)=>{
    res.send("hello world..!!!")
})