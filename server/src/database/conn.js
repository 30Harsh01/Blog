const mongoose=require('mongoose')
const connection=async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/blog')
        console.log('connected')
    }catch(Error){
        console.log('Error:',Error)
    }
}
module.exports =connection