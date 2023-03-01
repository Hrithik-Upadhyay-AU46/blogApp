import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const BlogDetails = () => {
  const[blog,setBlog]= useState()
  const navigate = useNavigate()
  const id = useParams().id
  
  const fetchDetails= async()=>{
    const res = await fetch(`http://localhost:8888/blog/${id}`,{
      method:'GET'
    })
    const data = res.json()
    return data
  }
  useEffect(()=>{
   fetchDetails().then((data)=>{
    setBlog(data.blog)
    document.getElementById('title').value= data.blogs.title
    document.getElementById('description').value= data.blogs.description
   })
  },[id])

  const editBlog = async()=>{
    let title = document.getElementById('title').value
    if(!title){
       alert('Please fill title')
       return
    }
    let description = document.getElementById('description').value
    if(!description){
      alert('Please fill description')
      return
   }
    console.log(title,description)
    const res = await fetch(`http://localhost:8888/blog/update/${id}`,{
      headers:{
        "Content-Type":"application/json"
      },
      method:"PUT",
      body: JSON.stringify({
        title:title,
        description:description
      })
    }).catch((err)=> console.log(err))
    const data =  await res.json()
    if(data.msg ==="updated sussecfuly"){
      document.getElementById('title').value=""
      document.getElementById('description').value=""
      alert('Blog Updated')
      navigate('/blogs')
    }
  }
  return (
    <div className='bdy'>
     <div className='prnt'>
      <h1>Edit BLOGS</h1>
      <div className='input'>
        <input type='text' id='title' placeholder='Title' />
        <input type='text' id='description' placeholder='Description' />
        
      </div>
      <div className='btn'>
      <button onClick={editBlog}>Done</button>
      </div>
    </div>
   </div>
  )
}

export default BlogDetails