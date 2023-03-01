import idUser from "../model/idUser.js"

 const addId = async(req,res)=>{
    let idData = req.body
    try{
      let id = await idUser.create(idData)
      res.send({status:"success",id:id})
    }catch(err){
      console.log(err)
      res.send(err)
    }
  }
  
  export const getId = async(req,res)=>{
    let id 
    try{
      id = await idUser.find()
      return res.status(201).json({id})
    }catch(err){
      return console.log(err)
    }
    
  
  }

  export const deleteId = async(req,res)=>{
    try{
        await idUser.deleteMany()
    }catch(err){
        return console.log(err)
      }
      return res.json({msg:"deleted"})
  }
  export default addId