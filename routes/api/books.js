const express = require("express");
const router = express.Router();

//Get /api/books/test
//public
router.get('/test', (req, res) =>{
    res.send("getting ...")
})


module.exports = router;