const mongoose = require('mongoose');
const crypto = require('crypto');
// const  uuidv1  = require('uuid');
const { v4: uuidv4 } = require('uuid');


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

// virtual field

userSchema.virtual('password')
.set(function(password) {
    this._password = password
    this.salt = uuidv4()
    this.hashed_password = this.hashPassword(password)
  })
  .get(function() {
    return this._password
  })

userSchema.methods = {
    hashPassword: function(password){
       if(!password){
           return ""
       }
       try{
          return crypto.createHmac('sha1', this.salt)//crypto is core node module used for hash
                          .update(password)
                          .digest('hex')

       }catch(err){
           return "";
       }
    }
}
module.exports = mongoose.model("User", userSchema);
//mongoose.model method is used to create new model
//("User", userSchema) where User is model based on userSchema