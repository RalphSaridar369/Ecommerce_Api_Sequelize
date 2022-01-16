const express = require('express');
const router = express.Router();
const {register} = require('../controllers/users/users');

router.post('/register',register);


module.exports=router;
