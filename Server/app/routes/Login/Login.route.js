"use strict"

const router = require("express").Router()
const { signup , VerifyedOTP, signin ,changePassword }= require('../../controllers/Login/Login.controllers')
// const {chaacngePasswordmiddleware } = require('../middlewares/auth')

// Route level middleware -to
// router.use('/changePassword',chaacngePasswordmiddleware)

// Public Routes
router.post('/signup',signup)
router.post('/signin',signin)
router.post('/VerifyedOTP', VerifyedOTP)

// Protected Routes
router.post('/changePassword', changePassword)

module.exports = router;