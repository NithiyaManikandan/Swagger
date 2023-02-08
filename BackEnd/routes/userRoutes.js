const express = require('express');
const router = express.Router();

const { postUserDetail,getUserDetail,getUserDetailById,updateUserDetail,deleteUserDetail } =  require('../collection/userCollection')
router.post('/post',postUserDetail);
router.get('/get',getUserDetail)
router.put('/update/:_id',updateUserDetail)
router.get('/:_id',getUserDetailById)
router.delete('/delete/:_id',deleteUserDetail)
module.exports = router
