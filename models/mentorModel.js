const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const mentorModel = new Schema({
    email:{
        type:String,
        unique:true,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    interest:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model('mentorModel',mentorModel)