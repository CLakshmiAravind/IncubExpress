const express = require('express')
const {createStudent,getAllStudents, loginStudent }=require('../controllers/studentControllers')

const router = express.Router()


router.post('/',createStudent)
router.get('/',getAllStudents)
router.post('/login',loginStudent)

module.exports = router