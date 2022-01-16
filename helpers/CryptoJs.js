var CryptoJS = require("crypto-js");

const encrypt = (data,secret) =>{
    return CryptoJS.AES.encrypt(data, secret?secret:process.env.SECRET).toString();
}

const decrypt = (data,secret) =>{
    let bytes =  CryptoJS.AES.decrypt(data, secret?secret:process.env.SECRET);
    let original = bytes.toString(CryptoJS.enc.Utf8);
    return original
}

module.exports = {
    encrypt,
    decrypt
}