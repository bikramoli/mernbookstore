const { response } = require("express");
const express = require("express");
const router = express.Router();
const books = require("../../models/models")
//Get /api/books/test
//public
router.get('/test', (req, res) =>{
    res.send("getting ...")
})

//Get api/books
router.get("/", (req, res)=>{
    books.find()
     .then(books => res.json(books))
     .catch(err => res.status(404).json({nobookfound: "no book found here.."}))
})
module.exports = router;