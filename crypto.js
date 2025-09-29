const crypto = require('crypto')

const hashed=crypto.createHash('sha256').update("Hi parithi")
console.log(hashed.digest("base64"))
