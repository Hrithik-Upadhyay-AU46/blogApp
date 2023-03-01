import mongoose from "mongoose";

const idSchema = mongoose.Schema({
    userI:{
        type:String,
        required:true
    }
})
const idUser = mongoose.model('userId',idSchema)

export default idUser