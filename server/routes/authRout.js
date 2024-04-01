const express=require('express')
const router=express.Router()
const UserSchema=require('../src/schemas/userSchema')
const bcryptjs=require('bcryptjs')
//Signup 
router.post('/signup',async(req,res)=>{
   const {name,email,password}=req.body;
   if(!name||!email||!password||name===''||password===''||email===''){
     return res.status(400).json({Message:"All details required"})
   }
   const hashpassword=bcryptjs.hashSync(password,10)
   const newUser=new UserSchema({
      username:name,
      email:email,
      password:hashpassword
   })
   try{
      await newUser.save()
      res.status(200).json({Message:"Data saved"})
   }catch(Error){
      res.json({Message:Error})
   }
})

module.exports=router;