//(3b). 05-utils.js should export a single value, which is a function you will call in 03-modules.js.

//module.exports.generateInteger = 
function generateInteger(min, max) {

    return Math.floor(Math.random() * (max - min) ) + min;

}

module.exports = {generateInteger};