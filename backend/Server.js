const app= require("express")();
const dotenv= require("dotenv");
const ConnectDB = require("./config/ConnectDB");
const userRoutes = require("./routes/user/userRoutes")
const adminRoutes= require('./routes/admin/adminRoutes')

dotenv.config();

ConnectDB();

const port= process.env.PORT || 4000

app.listen(port,async ()=>{
    console.log(`Listening on port ${port}!`);
})

app.use('/route/user/',userRoutes);

app.use('/route/admin/',adminRoutes);