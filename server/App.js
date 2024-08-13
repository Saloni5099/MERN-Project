const express = require ('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();
const app = express();

const middleware =(req,res,next)=>{
   console.log("This is middleware");
   next();
}
app.get('/',(req,res)=>{
   res.send("Hello World");
})
app.get('/signin',(req,res)=>{
   res.send("signin page");
})
app.get('/signup',(req,res)=>{
   res.send("signup page");
})
app.get('/aboutUs',middleware,(req,res)=>{
   res.send("About us page");
})
const PORT = process.env.PORT||2000
app.listen(2000,()=>{
    console.log(`server running on ${process.env.DEV_MODE} mode port no. ${PORT}`);
})