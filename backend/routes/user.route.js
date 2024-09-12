const express = require('express');
const { signUp, login } = require('../controller/user.controller');

const router = express.Router();

// Sign Up route
router.post('/signup', signUp);

// Login route
router.post('/login', login);

module.exports = router;
