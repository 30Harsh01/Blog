const express=require('express')
const conn=require("../src/database/conn")
// app.use(express.json())
const app=express()
app.use(express.json())
conn()

app.use('/api/user',require('../routes/userRoutes'))
app.use('/api/auth',require('../routes/authRout'))

app.get("/",(req,res)=>{
    res.json({Message:"Lets start"})
})
app.listen(3000,()=>{
    console.log("listening to port")
})