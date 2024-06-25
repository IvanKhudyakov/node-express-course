//(3c). 06-alternative-flavor.js should export multiple values in the module.exports object, but it should use the alternative approach, adding each value one at a time. 
//The exported values from each should be used in 03-modules.js, logging results to the console so that you know it is working.

module.exports.findIdByName = function findIdByName (firstName, list) {

    let id;
    for (let i = 0; i <list.length; i++) {

        if (list[i] === firstName){
            id = i;
            break;
        }
    }
    if (id != undefined) {
        return id;
    } else {
        console.log(`${firstName} wasn't found in the array ${list}!`);
    }
}

module.exports.assumeSex = function generateGreetings (firstName) {
    if ((firstName === "Oprah") || (firstName === "Monica")) {
        return "Ms.";
    } else {
        return "Mr.";
    }

}
