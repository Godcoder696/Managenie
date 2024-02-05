const mongoose= require("mongoose")

const Task= mongoose.Schema(
    {
        taskName:{
            type:String,
            required:true
        },
        taskDesc:{
            type:String
        },
        assignedTo:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"User"
            }
        ],
        status:{
            type: String,
            default:"assigned"
        }
    },
    {
        timestamps:true
    }
)

const task= mongoose.model("Task",Task);
module.exports= task;