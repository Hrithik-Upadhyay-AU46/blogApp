import React from 'react'
import './blog.css'
import {useNavigate} from 'react-router-dom'
const Blog = ({title,description,imageUrl,userName,date,isUser ,id }) => {
  const navigate = useNavigate()
  const editBlog = ()=>{
    navigate(`/myBlogs/${id}`)
  }
  const deleteBlog = async ()=>{
    const res = await fetch(`http://localhost:8888/blog/${id}`,{
      method:"DELETE"
    }).catch((err)=> console.log(err))
    const data = await res.data
    return data
  }
  const handleDelete = () => {
    deleteBlog()
      .then(() => navigate("/blogs/add"))
      .then(() => navigate("/blogs"));
      alert('Blog Deleted')
  };
  return (
    <div className='parent'>
      
        <div className='upper'>
            <div className='upperDetails'>
            <div className='avtar'><h2>{userName[0].toUpperCase()}</h2></div>
            <div className='userDetails'>
                <h2>{userName}</h2>
                <p>{date}</p>
                </div>
                </div>
                {isUser && (
          <div className='btnSection'>
          <button className='edit' onClick={editBlog}>Edit</button>
          <button className='delete' onClick={handleDelete}>Delete</button>
        </div>
        )}
        
           
        </div>
        <div className='imgSection'>
          <img src={imageUrl} alt='ur choice'/>
        </div>
        <div className='details'>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default Blog