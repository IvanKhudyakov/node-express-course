//For the next part, you will write multiple programs. 04-names.js, 05-utils.js, 06-alternative-flavor.js, and 07-mind-grenade.js are modules that you load, using require statements, from the 03-modules.js file, which is the main program. 
//Remember that you must give the path name in your require statement, for example:
//const names = require("./04-names.js");
//NOTE: The only program you should need to actually invoke to test that everything is working is 03-modules.js, because it loads all the others (files 4-7).
const names = require("./04-names.js");
const utils = require("./05-utils.js");
const alternativeFlavor = require("./06-alternative-flavor.js");
const mindGrenade = require("./07-mind-grenade.js");

let id = utils.generateInteger(0,5);
let characterFirstName = names.firstNames[id];

let characterId = alternativeFlavor.findIdByName(characterFirstName, names.firstNames);
let characterLastName = names.lastNames[characterId];
let characterSex = alternativeFlavor.assumeSex(characterFirstName);


console.log(`Dear ${characterSex} ${characterFirstName} ${characterLastName}! I'm not good in inventing the tasks for development. So sorry for stupid example! Best Regards!`);
