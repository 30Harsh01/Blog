const express=require('express')
const router=express.Router()
const UserSchema=require('../src/schemas/userSchema')
const bcryptjs=require('bcryptjs')
const errorHandler=require('../utiles/error')
//Signup 
router.post('/signup',async(req,res,next)=>{
   const {name,email,password}=req.body;
   if(!name||!email||!password||name===''||password===''||email===''){
     next(errorHandler(400,'All feilds are required'))
      // return res.status(400).json({Message:"All details required"})
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
      next(Error)
   }
})

module.exports=router;