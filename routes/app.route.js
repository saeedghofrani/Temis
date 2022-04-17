const express = require('express');
const router = express.Router();

//Junction Box
const userRouter = require('./user.route.js');

//route and address 
router.use('/user', userRouter);

module.exports = router;