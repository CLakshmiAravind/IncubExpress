const mongoose = require('mongoose')

const Schema = mongoose.Schema

const studentModel = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    department:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        // select:false
    }
},{timestamps:true})

module.exports = mongoose.model('studentModel',studentModel)