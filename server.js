const express=require('express');
const app=express();
const path=require('path');
const posts=require('./routes/posts');
const errorHandler = require('./middleware/errorHandler');
const catchall = require('./middleware/catchall');
const port=process.env.PORT ||3000
//third party middleware 
app.use(express.json());
app.use(express.urlencoded({ extended:false}));

//routes
app.use('/api/posts',posts)
//catchall middleware
app.use(catchall)
//errorHandler middleware
app.use(errorHandler)
//port listen
app.listen(port,()=>console.log("server is running on port"))