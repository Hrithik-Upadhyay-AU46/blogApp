import React from 'react'
import './addblog.css'
import { useNavigate } from 'react-router-dom'

const AddBlog = () => {
  const naviagte = useNavigate()
  const addblg = async ()=>{
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
    let image = document.getElementById('image').value
    if(!image){
      alert('Please fill image Url')
      return
   }
     let userid = await fetch('http://localhost:8888/id/getId',{
      method:"GET"
     })
     let id = await userid.json()
     let ID=id.id[0].userI

  let addBlog = fetch("http://localhost:8888/blog/add",{
    headers:{
      'content-Type':'application/json'
    },
    method:"POST",
    body:JSON.stringify({
      title,
      description,
      image,
      user:ID
    })
  })
  document.getElementById('title').value=""
  document.getElementById('description').value=""
  document.getElementById('image').value=""
  naviagte("/blogs")
  alert('BLOG Added successfully')

    
  }
  return (
   <div className='bdy'>
     <div className='prnt'>
      <h1>ADD BLOGS</h1>
      <div className='input'>
        <input type='text' id='title' placeholder='Title' />
        <input type='text' id='description' placeholder='Description' />
        <input type='text' id='image' placeholder='Image URL' />
      </div>
      <div className='btn'>
      <button onClick={addblg}>ADD</button>
      </div>
    </div>
   </div>
  )
}

export default AddBlog