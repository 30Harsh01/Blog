const mongoose=require('mongoose')
require('dotenv').config();
const connection=async()=>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log('connected to mongo')
    }catch(Error){
        console.log('Error:',Error)
    }
}
module.exports =connection