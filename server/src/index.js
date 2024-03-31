const express = require('express')
require('dotenv').config();
const connection=require('../src/database/conn')
const app=express();
connection();
app.listen(3000,()=>{
    console.log("Listing to port 3000")
})