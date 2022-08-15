require('dotenv').config()
const express = require('express');
const { default: mongoose } = require('mongoose');
const postControllers = require('./routes/postRoutes')
const studentControllers = require('./routes/studentRoutes')
const mentorControllers = require('./routes/mentorRoutes')
const app = express()

// app.use(express.json())

PORT = process.env.PORT || 8000;
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})

app.use('/api/posts',postControllers)
app.use('/api/students',studentControllers)
app.use('/api/mentors',mentorControllers)


mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(PORT,()=>{
            console.log('mongoDB connected & server is listening on PORT',PORT);
        })
    })
    .catch((err)=>{
        console.log(err);
    })

