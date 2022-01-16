const postAction = require("../../helpers/PostAction");
const { encrypt, decrypt } = require('../../helpers/CryptoJs');

async function register(req, res) {
    postAction('User',{...req.body,password:req.body.password?encrypt(req.body.password):null},res)
}

module.exports={
    register
}
