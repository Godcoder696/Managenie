const mongoose= require("mongoose")

const Project= mongoose.Schema(
    {
        projectName:{
            type:String,
            required: true
        },
        description:{
            type:String
        },
        tasks:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Task"
            }
        ],
        members:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        ],
        admin:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    },
    {
        timestamps:true
    }
)

const project= mongoose.model("Project",Project);
module.exports= project;