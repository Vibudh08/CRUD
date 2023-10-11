const express = require('express')
const app = express()
const {join} = require('path')
const mongoose = require('mongoose')
const connectdb = require('./db/connectdb')
const router = require('./routes/web')
const studentModel = require('./models/Student')

//db connection
connectdb()

//middleware to get data from the form
app.use(express.urlencoded({extended:false}))

//static file- html css js
app.use('/home',express.static(join(process.cwd(),'public')))
app.use('/home/edit',express.static(join(process.cwd(),'public')))

//controller path
app.use("/home",router)


app.listen('8000',()=>{
    console.log("App is running on http://localhost:8000")
})