"use strict";

const express = require('express');
const router = express.Router();
const userValidation = require('../middleware/userValidation.middleware');
const { getUser } = require('../controller/authentication.controller.js');

router.use(userValidation);

router.route('/')
    .post(getUser);

module.exports = router;