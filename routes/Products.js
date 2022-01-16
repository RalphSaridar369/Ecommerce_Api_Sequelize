const express = require('express');
const router = express.Router();
const {postProduct} = require('../controllers/products/products');

router.post('/create',postProduct);


module.exports=router;
