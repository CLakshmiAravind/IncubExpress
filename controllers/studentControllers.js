const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const studentModel = require('../models/studentModel')

const createStudent = async (req, res) => {
    const { email, name, department, password } = req.body
    const user = await studentModel.findOne({email})
     if(user)
        return res.send('user already existed')
    const student = await studentModel.create({ email, name, department, password });
    res.status(200).json(student)
}

const getAllStudents = async (req, res) => {
    const allStudents = await studentModel.find({})
    res.json(allStudents)
}

const loginStudent =async (req,res)=>{
    const {email,password} = req.body

    
        const student = await studentModel.findOne({email})
        // const student = await studentModel.find
        if(!student)
            return res.send('Invalid email or password')
        if(!(password===student.password))
            return res.status(400).send('Invalid email or password')
            const token = jwt.sign({_id:student._id,name:student.name,email:student.email,department:student.department},'process.env.SECRETKEY')
            res.send(token)
}

module.exports = {
    createStudent, getAllStudents, loginStudent
}