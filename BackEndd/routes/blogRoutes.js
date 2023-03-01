import express from "express"
import { addBlog, deleteById, getAllBlogs, getById, getByUserId, updateBlog } from "../controlers/blogController.js"
const blogRoute = express.Router()

blogRoute.get('/get',getAllBlogs)
blogRoute.post('/add',addBlog)
blogRoute.put("/update/:id",updateBlog)
blogRoute.get('/:id',getById)
blogRoute.delete('/:id',deleteById)
blogRoute.get('/user/:id',getByUserId)

export default blogRoute