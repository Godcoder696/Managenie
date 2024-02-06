const expressAsyncHandler= require("express-async-handler");
const user = require("../model/User");


const loginUser= expressAsyncHandler(
    async (req, res)=>{
        const {email,password}= req.body;

        if(!email || !password) res.status(400).json({msg:"Enter all details"});

        const findUser= await user.findOne({email});

        if(findUser && (await findUser.matchPassword(password)))
            res.status(200).json({name:findUser.userName,email:email})

        else res.status(400).json({msg:"Wrong credentials!"});
    }
)

const signUpUser= expressAsyncHandler(
    async (req,res)=>{
        const {userName,email,password,isAdmin}= req.body;

        if(!userName || !email || !password ){
            res.json({msg:"Enter all the details!"})
        }

        const exists= await user.findOne({email})
        if(exists) res.status(400).json({msg:"User already exists!"})

        const u= await user.create({userName,email,password,isAdmin});

        if(u) res.status(200).json({msg:"User created successfully!"});
        else res.status(400).json({msg:"failed to create a user!"})
    }
)

module.exports={loginUser,signUpUser}