const express=require('express')
const router=express.Router()
const UserSchema=require('../src/schemas/userSchema')
const bcryptjs=require('bcryptjs')
const errorHandler=require('../utiles/error')
const jwt=require('jsonwebtoken')
//Signup route
router.post('/signup',async(req,res,next)=>{
   const {name,email,password}=req.body;
   if(!name||!email||!password||name===''||password===''||email===''){
     next(errorHandler(400,'All feilds are required'))
      return
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
      // res.json(Error)
      next(Error)
   }
})

// signin route
router.post('/signin',async(req,res,next)=>{
   const {email,password}=await req.body;
   if(!email||!password||password===''||email===''){
     next(errorHandler(400,'All feilds are required'))
      return
   }
   try{
      const validateuser=await UserSchema.findOne({email})
      if(!validateuser){
         next(errorHandler(404,'User not found'))
         return
      }
      // console.log(validateuser)
      const validatepassword=bcryptjs.compareSync(password,validateuser.password);
      if(!validatepassword){
         next(errorHandler(404,'Password or username is incorrect'))
         return
      }
      const {password:pass,...rest}=validateuser._doc;
      // console.log(validatepassword)
      // console.log(validateuser._id)

      //making a token using jwt 
      const token=jwt.sign(
         {id:validateuser._id}, process.env.JWT_SECRET
      )
      // console.log(token)
      res.status(200).cookie('access_token',token,{
         httpOnly:true,
      }).json(rest)
   }catch(Error){
      console.log(Error)
      // res.json(Error)
      next(Error)
   }
})

module.exports=router;