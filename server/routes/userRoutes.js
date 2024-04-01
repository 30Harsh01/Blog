const express=require('express')
const router=express.Router()

router.get('/hello',(req,res)=>{
    // res.json({Message:"Hello this is working"})
    res.send('hello')
})

module.exports=router