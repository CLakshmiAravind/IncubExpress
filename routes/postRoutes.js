const express = require('express')

const router = express.Router();

const {postAPost,getAllPosts,getPost,updatePost,deletePost} = require('../controllers/postControllers')

router.post('/',postAPost)

router.get('/',getAllPosts)

router.get('/:id',getPost)

router.patch('/:id',updatePost)

router.delete('/:id',deletePost)

module.exports = router