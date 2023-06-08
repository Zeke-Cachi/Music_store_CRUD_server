//EXPRESS
const express = require('express');
const router = express.Router();

//CONTROLLERS
const userController = require('../controllers/userController');

//MIDDLEWARES


//POST REQUEST
router.post('/users/', userController.createUser)

//EDIT REQUEST


//DELETE REQUEST



module.exports = router