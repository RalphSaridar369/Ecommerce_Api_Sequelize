const postAction = require("../../helpers/PostAction");
const { encrypt, decrypt } = require('../../helpers/CryptoJs');
const checkUnique = require("../../helpers/CheckUnique");

async function register(req, res) {
    let checkResult = await checkUnique('User',[
        {key:'email',value:req.body?.email},
        {key:'fullName',value:req.body?.fullName},
    ],req,res)

    if(checkResult.message)
        res.status(403).send(checkResult)
    else
        postAction('User',{...req.body,password:req.body.password?encrypt(req.body.password):null},res)
}

module.exports={
    register
}
