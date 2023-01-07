"use strict";
require("./app/utils/mongooseConnecter.util");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());





app.get('/',(req,res)=>{
  console.log("okk");
  res.send("okk")
})






const port = 7070
// Server start
app.listen(port, () =>
  console.log(`Server is running on http://127.0.0.1:${port}`)
);
