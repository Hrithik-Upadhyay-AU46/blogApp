import React, { useEffect, useState } from 'react'
import Blog from '../blog/Blog'
import './blogs.css'

const Blogs = () => {
 const[blogs, setBlogs] = useState()
 const[ID,setID]= useState()
 
  const blgs = async ()=>{
    let blgD = await fetch ('http://localhost:8888/blog/get',{
      method:"GET"
    })
    let data = await blgD.json()
     return data
  }

  useEffect(()=>{
    blgs().then((data)=> setBlogs(data.blogs))
  },[])
  let user = async ()=>{
    let userid = await fetch('http://localhost:8888/id//getId',{
      method:"GET"
     })
     let id = await userid.json()
    //  console.log(id.id[0].userI)
     return id.id[0].userI
  }
  useEffect(()=>{
     user().then((data)=> setID(data))
  },[])

  return (
    <div className='headd'>
      {blogs&&
       blogs.map((blog,index)=>(
         <Blog 
         id={blog._id}
         isUser={ID===blog.user._id}
         title={blog.title}
         description={blog.description}
         imageUrl={blog.image}
         userName={blog.user.name}
         date = {blog.date}
         />
       ))
      }
     
    </div>
    // title,description,imageUrl,userName
  )
}

export default Blogs