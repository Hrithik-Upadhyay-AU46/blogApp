import express from 'express'
import sighnup, { login } from '../controlers/user.js'
const userRoute = express.Router()

userRoute.post('/sighup',sighnup)
userRoute.post("/login",login)



export default userRoute