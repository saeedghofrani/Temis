const express = require('express');
const router = express.Router();

//Junction Box
const userRouter = require('./user.router.js');

//route and address
router.use('/user', userRouter);