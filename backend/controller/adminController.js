const expressAsyncHandler= require('express-async-handler');
const user = require('../model/User');

const adminLogin= expressAsyncHandler(
    async (req,res)=>{
        const {email,password}= req.body;

        if(!email || !password) 
            res.status(500).json({msg:"Please provide all credentials!"})
        
        const u= await user.findOne({email});

        if(u && u.isAdmin && (await u.matchPassword(password))){
            res.status(200).json({
                name: u.userName,
                email:u.email,
                isAdmin: u.isAdmin
            });
        }
        else res.status(500).json({msg:"Wrong Admin Credentials!"})
    }
)

const adminSignUp= expressAsyncHandler(
    async (req,res)=>{
        const {userName,email,password}= req.body;
        const isAdmin= true;

        if(!userName || !email || !password ){
            res.json({msg:"Enter all the details!"})
        }

        const exists= await user.findOne({email})
        if(exists) res.status(400).json({msg:"Admin already exists!"})

        const u= await user.create({userName,email,password,isAdmin});

        if(u) res.status(200).json({msg:"Admin created successfully!"});
        else res.status(400).json({msg:"failed to create a user!"})
    }
)

module.exports= {adminLogin,adminSignUp}