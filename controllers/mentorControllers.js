const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const mentorModel = require('../models/mentorModel')

const createMentor = async (req,res)=>{
    const { email, name, department, password,qualification,interest } = req.body
    const user = await mentorModel.findOne({email})
     if(user)
        return res.send('user already existed')
    const student = await mentorModel.create({ email, name, department, password,qualification,interest });
    res.status(200).json(student)
}

const getAllMentors =async (req,res) =>{
    const allStudents = await mentorModel.find({})
    res.json(allStudents)
}

const loginMentor =async(req,res)=>{
    const {email,password} = req.body

    
    const student = await mentorModel.findOne({email})
    if(!student)
        return res.send('Invalid ema or password')
    if(!(password===student.password))
        return res.status(400).send('Invalid email or password')
        const token = jwt.sign({_id:student._id,name:student.name,email:student.email,department:student.department,interest:student.interest,qualification:student.qualification},'process.env.SECRETKEY')
        res.send(token)
}
module.exports = {
    getAllMentors,
    loginMentor,
    createMentor
}