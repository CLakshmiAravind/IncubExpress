const express = require('express')
const {getAllMentors, createMentor, loginMentor } = require('../controllers/mentorControllers')
const router = express.Router()

router.get('/',getAllMentors)
router.post('/',createMentor)
router.post('/login',loginMentor)
module.exports = router