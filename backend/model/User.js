const mongoose= require("mongoose");

const User= mongoose.Schema(
    {
        userName:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        isAdmin:{
            type:Boolean,
            required:true
        }
    },
    {
        timestamps:true
    }
)

const user= mongoose.model("User",User);
module.exports= user;