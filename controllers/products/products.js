const postAction = require("../../helpers/PostAction");

async function postProduct(req, res) {
    postAction('Products',req,res)
}


module.exports = {
    postProduct
};