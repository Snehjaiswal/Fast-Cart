"use strict"

const { Schema, model } = require('mongoose');


const ProductSchema = Schema({

    Product_Name: {
        type: String,
        required: true,
        trim: true
    },
    Product_Img: {
        type: String,
        required: true,

    },
    Product_Qty: {
        type: Number,
        default: 20
    },
    Product_Price: {
        type: Number,
        required: true
    },
    Product_Id: {
        type: Number,
        required: true
    },
    Seller_Id: {
        type: Number
    },
    isaActive:{
        type:Boolean,
        default:true
},
},
    {
        timestamps: true
    },


)

// collection creation 
const ProductModel = model('PRODUCT', ProductSchema, "Product");





module.exports = ProductModel;

