/*
 * Title:   Login System Advanced 
 * Author:     Sneh Jaiswal
 * Created On: Fri Jun 17 2022 10:56:30 am
 */

"use strict"

const router = require("express").Router()
const { add_product }= require('../../controllers/Sellers/Product.cotroller')


router.post('/add_product',add_product)


module.exports = router;