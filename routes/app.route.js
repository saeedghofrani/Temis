const express = require('express');
const router = express.Router();

//Junction Box
const authenticationRouter = require('./authentication.route.js');

//route and address 
router.use('/authentication', authenticationRouter);

module.exports = router;