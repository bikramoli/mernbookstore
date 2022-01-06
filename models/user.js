const mongoose = require('mongoose');
const uuidv1 = require("uuidv1");


const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 32
        },
        email:{
            type: String,
            required: true,
            trim: true,
            maxlength: 32
        },
        hashed_password:{
            type: String,
            required: true
        },
        about: {
            type: String,
            trim: true
        },
        salt: String,
        role: {
            type: Number,
            default: 0
        }
    },
    {timestamps: true}

);

//virtual field
userSchema.virtual("password")
.set(function(password){
    this._password = password
    this.salt = uuidv1()

})
.get()
