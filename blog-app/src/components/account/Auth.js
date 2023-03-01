import'./Login.css'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const sighupValue={
  name:"",
  username:"",
  password:''
 }

 const loginValue={
  username:"",
  password:""
 }
function Auth(){
 

  const naviagte = useNavigate()
    const[account,setAccount] = useState('login')
   const toggleAccount=()=>{
   account === 'sighnup' ? setAccount('login') : setAccount('sighnup')
   }
   
   const[signup,setSignup]= useState(sighupValue)
   const[login,setLogin]= useState(loginValue)

   const onInputChange=(e)=>{
    setSignup({...signup, [e.target.name]:e.target.value})
   }

   const onValueChange=(e)=>{
    setLogin({...login,[e.target.name]:e.target.value})
   }

   const loginData= async()=>{
    let username = document.getElementById('logUsername').value
    let password = document.getElementById('logPassword').value
    let log = await fetch('http://localhost:8888/login',{
      headers:{
        "content-Type" : 'application/json'
      },
      method:'POST',
      body:JSON.stringify({
        username:username,
        password:password
      })
    })  
    let logD = await log.json()
    


    if(logD.status==="success"){ 
      // localStorage.setItem('userID', JSON.stringify(logD.user._id))
      document.getElementById('logUsername').value = ""
      document.getElementById('logPassword').value = ""
      
      let iid = await fetch('http://localhost:8888/id/save',{
        headers:{
          "content-Type" : 'application/json'
        },
        method:'POST',
        body:JSON.stringify({
          userI: logD.user._id
        })
      })
      naviagte("/blogs")
    }
    const lk= ()=> localStorage.setItem("userId",logD.user._id)
    console.log(lk())
    
   }

  //  const loclStrg = ()=>{
  //   loginData()
  //   .then((data)=> localStorage.setItem("userId",data.user._id))
  //   .then((data)=>{
  //     if(data.status ==="success"){
  //       console.log("yes")

  //     }else{
  //       console.log("no")
  //     }
  //   }) 
  //  }

   const signupData = async()=>{
    let name = document.getElementById('name').value
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
      let sign = await fetch("http://localhost:8888/sighup",{
        headers:{
          'content-Type':'application/json'
        },
        method:"POST",
        body:JSON.stringify({
          name:name,
          username:username,
          password:password
        })
      })
      let signD = await sign.json()
      console.log(signD)
      if(signD.status==="success"){
        
        alert("SIgnUp seccessfully")
        document.getElementById('name').value = ""
        document.getElementById('username').value = ""
        document.getElementById('password').value = ""
        setAccount('login') 
      }
     
    
   }

    return(
        <div className="body">
        <div className="imageSection">
          <div className="background"></div>
         
        </div>

       
        <div className="formContainer">
          <div className='demo'></div>
          <div className="blogLogo">
           <h1>BLOG APP</h1>
          </div>

          {
            account=== 'login' ?
          <div>
            <div className="username">
              <label  for="username"></label>
              <input
                type="text"
                id="logUsername"
                name="name"
                placeholder="Username..."
                onChange={(e)=>{onValueChange(e)}}
              />
            </div>
            <div className="userpaasword">
              <label for="password"></label>
              <input
                type="password"
                id="logPassword"
                name="password"
                placeholder="Password..."
                onChange={(e)=>{onValueChange(e)}}
              />
            </div>
            <button className="sbmit green" onClick={loginData}>Login</button>
            
            <button className="sbmit" onClick={toggleAccount}  >Create account</button>
          </div>
:
          <div>
          <div className="name">
              <label  for="name"></label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name..."
                onChange={(e)=>{onInputChange(e)}}
              />
            </div>
            <div className="username">
              <label  for="username"></label>
              <input
                type="text"
                id="username"
                name="Username"
                placeholder="Username..."
                onChange={(e)=>{onInputChange(e)}}
              />
            </div>
            <div className="userpaasword">
              <label for="password"></label> <input type="password" id="password" name="password" placeholder="Password..." onChange={(e)=>{onInputChange(e)}}
              />
            </div>
            <button className="sbmit green" onClick={signupData}>Sighn Up</button>
            
            <button className="sbmit" onClick={toggleAccount} >Allready have account</button>
          </div>
        }
        </div>
          
        </div>
    )
}


export default Auth