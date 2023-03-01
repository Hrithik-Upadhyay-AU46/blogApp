import mongoose from 'mongoose'

const dbUrl ="mongodb+srv://hrithik:Hri805120@simplesa.uks0psm.mongodb.net/?retryWrites=true&w=majority"

const connectdB = async()=>{
   try{
    mongoose.connect(dbUrl,{dbName:'blog'})
    console.log('DB connected')
   }catch{
     console.log('db not conected')
   }
}

export default connectdB