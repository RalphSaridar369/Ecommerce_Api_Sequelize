const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const dir = __dirname

require('dotenv').config();
const PORT = 3000;

const app = express();
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(PORT,()=>{
    console.log("Serving: true")
})  

module.exports=dir