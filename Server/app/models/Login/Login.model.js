
"use strict"

const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const LoginSchema = Schema({

    Name: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
  
    otp: "",
    expires: "",
    isVerifyed: Boolean,
    roleId:{
        type:Number,
        default:1
    }
},
    {
        timestamps: true
    },


)

// collection creation 
const LoginModel = model('LOGIN', LoginSchema, "User Login");





module.exports = LoginModel;

