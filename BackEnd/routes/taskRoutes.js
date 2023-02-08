const express = require('express');
const router = express.Router();

const { postTaskDetail } =  require('../collection/taskCollection')

router.post('/post',postTaskDetail);

module.exports = router

