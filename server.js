const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const ProductRoute = require('./routes/Products');
const dir = __dirname

require('dotenv').config();
const PORT = 3000;

const app = express();
app.use(bodyParser.json());
app.use('/products',ProductRoute)

const server = http.createServer(app);

server.listen(PORT,()=>{
    console.log("Serving: true")
})  

module.exports=dir