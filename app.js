const express = require ('express');

const App = express();


App.get("/", (req, res)=>{
    res.send("hello world..!!!")
})
const PORT = process.env.PORT || 3000;
App.listen(PORT, ()=>{
    console.log(`App running on ${PORT}`)
})