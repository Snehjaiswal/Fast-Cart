"use strict";

const express = require("express");
const router = express.Router();
const uuid = require("uuid").v4;
const cloudinary = require('cloudinary').v2
const ProductModel = require('../../models/Sellers/product.model')

// cloudinary Connectio
cloudinary.config({
    cloud_name: 'dhsyk67bd',
    api_key: '469914358775226',
    api_secret: 'B4j5Ubl5WelpQF0JCbokP61mVjw'
})


// Product CLASS
class Product {


    async add_product(req, res) {
// console.log("Product_Name",re);
        const { Product_Name, Product_Price, Seller_Id } = req.body;
        const Product_Img = req.files.photo;
        // CHECK ALL FIELD IN FILL

        console.log(Product_Img);
        // console.log(Product_Name, Product_Price, Seller_Id);
        const ImagesArr = []

        return

        cloudinary.uploader.upload(ProductImg.tempFilePath, (err, result) => {
            // ImagesArr.push(result)


            // it's help save data in db
            const Product = new LoginModel({
                Product_Name,
                Product_Qty,
                Product_Price,
                Seller_Id,
                // file,
            });
        })

        //STORE YOUR LOGIN DATA IN DB 
        await Product.save();
        console.log({ Product });

        res.send({ msg: "Success fullt upload" });


    }









}

module.exports = new Product();
