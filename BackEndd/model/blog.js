import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref:"user",
        required:true
    }
})

const Dblog= mongoose.model('Blog',blogSchema)
export default Dblog