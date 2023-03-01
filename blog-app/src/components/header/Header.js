import React from 'react'
import { Link} from 'react-router-dom'
import './Header.css'
import { useNavigate } from 'react-router-dom'
const Header = () => {
  const navigate = useNavigate()
  const back= async()=>{
    let bck = await fetch('http://localhost:8888/id/delete',{
      method:"DELETE"
    })
     let bckData = await bck.json()
     if(bckData.msg === 'deleted'){
      navigate('/')
     }
  
  }
  return (
    <header>
        <div className='start'>
        <h1>Blogs</h1>
        <button> <Link exact activeClassName="active" to='/blogs'>ALL BLOGS</Link> </button>
        {/* <button><Link  exact activeClassName="active" to='/myBlogs'>MY BLOGS</Link></button> */}
        <button><Link  exact activeClassName="active" to='/blogs/add'>ADD BLOGS</Link></button>
        </div>
        <div className='end'>
        <button onClick={back}>LOGOUT</button>
        </div>

    </header>
  )
}

export default Header