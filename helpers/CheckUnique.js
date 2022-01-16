const model = require("../models");

const checkUnique = async (modelName, data, req, res) => {
    data.map(async(item)=>{
        let result = await model[modelName].findAll({
            where: {
                [item.key]: item.value,
            }
        });
        if(result.length>0)
            return {status:403,message:`${item.key} isn't unique`}
    })
}

module.exports = checkUnique