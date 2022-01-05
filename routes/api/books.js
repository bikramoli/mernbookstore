const { response } = require("express");
const express = require("express");
const router = express.Router();
const Book = require("../../models/books")
const {bookController} = require("../../controllers/book")


//Get /api/books/test
//public
router.get('/test', bookController)

//Get api/books
router.get("/books", (req, res)=>{
    Book.find()
     .then(books => res.json(books))
     .catch(err => res.status(404).json({nobookfound: "no book found here.."}))
})
//post api/books
router.post('/', (req, res) => {
    Book.create(req.body)
    .then(book => res.json({msg: "book added successfully"}))
    .catch(err => res.status(400).json({error:"cannot add book"}));
})
module.exports = router;