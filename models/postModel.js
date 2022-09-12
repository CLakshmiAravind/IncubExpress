const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const postModel = new Schema({
    email:{
        type:String,
        required:true
    },
    
    title:{
        type:String,
        required:true
    },

    costEstimate:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    domain:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('postModel',postModel)