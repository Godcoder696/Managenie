const mongoose= require("mongoose");

const ConnectDB= async ()=>{
    try {
        
        let result= await mongoose.connect(process.env.DB);

        if(result) console.log("Connected to DB!");
        else console.log("Failed to Connect to DB!");

    } catch (error) {
        console.log("Error Occurred!",error);
    }
}

module.exports= ConnectDB