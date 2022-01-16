const postAction = require("../../helpers/PostAction");

async function postProduct(req, res) {
    console.log(req.body)
    postAction('Products',req,res)
}


module.exports = {
    postProduct
};