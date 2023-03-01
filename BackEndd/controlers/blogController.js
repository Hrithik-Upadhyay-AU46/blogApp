import mongoose from "mongoose"
import Blog from "../model/blog.js"
import userId from "../model/user.js"

export const getAllBlogs= async (req,res)=>{
 let blogs
 try{
    blogs=await Blog.find().populate("user")

 }catch(err){
   return console.log(err)
 }
 return res.status(201).json({blogs})
}

export const addBlog= async(req,res)=>{
    const {title,image,user,description} = req.body
    let existingUser
    try{
        existingUser = await userId.findById(user)
    }catch(err){
        console.log(err)
    }
    if (!existingUser) {
        return res.status(400).json({ message: "Unable TO FInd User By This ID" });
      }
    const blog = new Blog( {
        title,
        description,
        image,
        user,
        date: new Date().toLocaleDateString()
    })
    try{
        
        const session = await mongoose.startSession()
        session.startTransaction()
        await blog.save({session})
        existingUser.blogs.push(blog)
        await existingUser.save({session})
        await session.commitTransaction()
    }catch(err){ 
        console.log(err)
        return res.status(500).json({ message: err })
    }
    return res.status(200).json({ blog })
}

export const updateBlog= async(req,res)=>{
    let blogId = req.params.id
    const {title , description} = req.body
    let blogs
    try{
        blogs= await Blog.findByIdAndUpdate(blogId,{
            title,
            description
        })
    }catch(err){
        return console.log(err)
    }
    if(!blogs){
        return res.status(500).json({msg:"unable to update"})
    }
    return res.status(201).json({msg:"updated sussecfuly"})
}

export const getById = async (req,res)=>{
    let id = req.params.id
    let blogs
    try{
        blogs= await Blog.findById(id)
    }catch(err){
        console.log(err)
    }
    if(!blogs){
        return res.status(400).json({msg:"Unable to find"})
    }
    return res.status(201).json({blogs})
}

export const deleteById = async (req,res)=>{
    let id = req.params.id
    let blogs
    try{
        blogs = await Blog.findByIdAndRemove(id)
    }catch(err){
        console.log(err)
    }
    if(!blogs){
        return res.status(400).json({msg:"not found"})
    }
    return res.status(200).json({msg:"Deleted successfully"})
}

export const getByUserId = async (req,res)=>{
    const Id = req.params.id
    let userBlogs
    try{
        userBlogs = await userId.findById(Id)
    }catch(err){
        console.log(err)
    }
    if(!userBlogs){
        return res.status(404).json({msg:"No Blogs Found"})
    }
    return res.status(200).json({user:userBlogs})
}
