const errorHandler=(statusCode,Message)=>{
    const error=new Error()
    error.statusCode=statusCode;
    error.Message=Message
    return error
}

module.exports=errorHandler