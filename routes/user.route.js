"use strict";

const express = require('express');
const router = express.Router();
const { getUser } = require('../controller/user.controller.js');

router.route('/')
    .post(getUser);

module.exports = router;