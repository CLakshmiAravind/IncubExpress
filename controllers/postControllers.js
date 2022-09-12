const mongoose = require('mongoose')
const postModel = require('../models/postModel')


const postAPost = async (req,res)=>{
    const {email,title,costEstimate,description,category,department,domain} = req.body

    try{
    const post = await postModel.create({department,email,costEstimate,title,description,category,domain})
    res.status(200).json(post)
    }
    catch(err){
        res.status(400).json({error:err})
    }
}

const getAllPosts = async(req,res)=>{
    const allPosts = await postModel.find().sort({createdAt:-1})
    if(!allPosts){
    return res.status(400).json({error:'not posts here'})
    }
    res.status(200).json(allPosts)
}


const getPost = async(req,res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({message:"enterd id is incorrect"})
    }
    try{
        const post = await postModel.findById(id);
        if(!post){
            return res.status(400).json({error:'not found'})
        } 
        res.status(200).json(post)
    }catch(err){
        res.status(400).json({error:'unknown'})
        
    }
}


const updatePost = async(req,res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({message:"enterd id is incorrect"})
    }
    const post = await postModel.findOneAndUpdate({_id:id},{...req.body})
    if(!post){
        return res.status(400).json({error:'no post on this id'})
    }
    res.status(200).json({message:'updated successfullt'})
}

const deletePost = async(req,res)=>{
    const {id} = req.params
    const post = await postModel.findByIdAndDelete(id)
    if(!post){
        return res.status(400).json({error:'no post found on that id'})
    }
    res.status(200).json({message:'deleted the post'});
}

module.exports={
    postAPost,
    getAllPosts,
    getPost,
    updatePost,
    deletePost
}