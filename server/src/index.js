const express=require('express')
const conn=require("../src/database/conn")
const cors=require('cors')
// app.use(express.json())
const app=express()
app.use(express.json())
app.use(cors())
conn()

app.use('/api/user',require('../routes/userRoutes'))
app.use('/api/auth',require('../routes/authRout'))

app.get("/",(req,res)=>{
    res.json({Message:"Lets start"})
})
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode||500;
    const Message=err.Message||"Internal server error";
    res.status(statusCode).json({
        success:false,
        statusCode,
        Message
    })
})
app.listen(3000,()=>{
    console.log("listening to port")
})