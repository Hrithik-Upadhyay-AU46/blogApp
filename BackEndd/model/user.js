import mongoose from 'mongoose'
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique: true
    },

    password:{
        type:String,
        required:true
    },
    blogs:[{type: mongoose.Types.ObjectId, ref:"blog", required:true}]
})

const userId = mongoose.model('user',userSchema)

export default userId