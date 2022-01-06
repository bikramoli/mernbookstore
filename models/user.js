const mongoose = require('mongoose');


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

)