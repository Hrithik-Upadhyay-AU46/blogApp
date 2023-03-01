import userId from "../model/user.js"

const sighnup= async(req,res)=>{
  let userData = req.body
  try{
    let user = await userId.create(userData)
    res.send({status:'success',user:user})
  }catch(error){
     console.log(error)
     res.send(error)
  }
}

export const login = async(req,res)=>{
  let logUser = req.body
  let existingUser
  try{
    existingUser =await userId.findOne({username:logUser.username})
    console.log(existingUser)
  }catch(err){
    return console.log(err)
  }
  if(!existingUser){
return res.status(404).json({msg:"User not find"})
  }

  if(existingUser.password != logUser.password){
    return res.status(404).json({msg:"Password is incorect"})
  }
  return res.status(200).json({status:'success',user:existingUser})
  
}

export default sighnup