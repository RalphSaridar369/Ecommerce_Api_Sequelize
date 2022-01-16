const postAction = require("../../helpers/PostAction");

async function postProduct(req, res) {
    postAction('Products',req.body,res)
}


module.exports = {
    postProduct
};