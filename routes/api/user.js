const express = require("express");
const router = express.Router();
const {userSignupValidator} = require("../../validator");

const {signup} = require('../../controllers/user');
const {signin} = require('../../controllers/user');


router.post("/signup", userSignupValidator, signup)
router.post("/signin", signin)


module.exports = router;