const app= require("express")();
const dotenv= require("dotenv");
const ConnectDB = require("./config/ConnectDB");

dotenv.config();

ConnectDB();

const port= process.env.PORT || 4000

app.listen(port,async ()=>{
    console.log(`Listening on port ${port}!`);
})