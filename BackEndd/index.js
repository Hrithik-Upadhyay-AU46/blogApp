import express from 'express'
const app = express()
import connectdB from './database/db.js'
import blogRoute from './routes/blogRoutes.js'
import userRoute from './routes/routes.js'
import idRoutes from './routes/idRoutes.js'
import cors from 'cors'
app.use(cors())
app.use(express.json())
app.use('/',userRoute)
app.use('/blog',blogRoute)
app.use('/id',idRoutes)
app.get('/',(req,res)=>{
res.send('working')
})

app.listen(8888,()=>{
    console.log('server started')
    connectdB()
})