"use strict";
require('./app/utils/mongooseConnecter.util')
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const fileUpload = require('express-fileupload')
const cloudinary = require('cloudinary').v2



// cloudinary Connectio
cloudinary.config({
  cloud_name: 'dhsyk67bd',
  api_key: '469914358775226',
  api_secret: 'B4j5Ubl5WelpQF0JCbokP61mVjw'
})




app.use(fileUpload({
  useTempFiles: true
}));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


app.get("/home", (req, res) => res.send("Welcome every one...."));



app.post('/', (req, res) => {
  console.log("okk", req.files);
const file = req.files.photo;

  cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
    console.log("result",result);
  })
  res.send("okk")
})





// Routes Or API's
app.use(require("./app/routes/Login/Login.route"));
app.use("/seller", require("./app/routes/Sellers/Product.route"));



const port = 7070
// Server start
app.listen(port, () =>
  console.log(`Server is running on http://127.0.0.1:${port}`)
);
