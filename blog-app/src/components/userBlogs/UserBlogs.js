import React, { useEffect, useState } from 'react'


const UserBlogs = () => {
  const[ID,setID] = useState()
  const[idUser,setIdUser]=useState()
  const userId = async ()=>{
    let userid = await fetch('http://localhost:8888/id/getId',{
      method:"GET"
     })
     let id = await userid.json()
     let ID=id.id[0].userI
     return ID
  }
useEffect(()=>{
  userId().then((data)=>setID(data))
},[])

console.log(ID)

  const user = async ()=>{
    const userData = await fetch(`http://localhost:8888/blog/user/${ID}`)
    const uData = await userData.json()
    return uData
  }
  useEffect(()=>{
    user().then((data)=> setIdUser(data))
  },[])
  console.log(idUser)
  return (
    <div>UserBlogs</div>
  )
}

export default UserBlogs