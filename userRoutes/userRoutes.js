const express = require('express');
const router = express.Router();
const userController = require('../userController/userController');

router.post('/sendEmail ',userController.signup);


module.exports = router;