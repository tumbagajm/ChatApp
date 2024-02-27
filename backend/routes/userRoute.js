const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/authentication', userController.authenticate);



module.exports = router;