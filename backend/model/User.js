const mongoose= require("mongoose");
const bcrypt = require('bcrypt');

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

User.methods.matchPassword= async function(enteredPass){
    return await bcrypt.compare(enteredPass,this.password);
}

User.pre('save',async (next)=>{
    if(!this.isModified){
        next();
    }
    const salt= await bcrypt.genSalt(10);
    
    this.password= await bcrypt.hash(this.password,salt);
})


const user= mongoose.model("User",User);
module.exports= user;