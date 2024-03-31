const mongoose=require('mongoose')


const userSchema=new mongoose.model({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
},{timestamps:true})

const User=mongoose.model("User",userSchema)
module.exports=User                  //in this case i have to use require keyword for import 

//if i fo like export default User  -> in this case i have to import it like import User from 'path'
