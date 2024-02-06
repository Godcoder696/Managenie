const express= require("express");
const app= express();
const dotenv= require("dotenv");
const ConnectDB = require("./config/ConnectDB");
const userRoutes = require("./routes/user/userRoutes")
const adminRoutes= require('./routes/admin/adminRoutes')
const cors = require('cors');

dotenv.config();

app.use(cors())
app.use(express.json());

ConnectDB();

const port= process.env.PORT || 4000

app.listen(port,async ()=>{
    console.log(`Listening on port ${port}!`);
})

app.get("/",(req,res)=>{
    res.send({msg:"Hello"})
})

app.use('/route/user/',userRoutes);

app.use('/route/admin/',adminRoutes);