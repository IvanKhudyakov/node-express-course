//(3d). 07-mind-grenade.js may not export anything, but it should contain a function that logs something to the console. 
//You should then call that function within the code of 07-mind-grenade.js. 
//This is to demonstrate that when a module is loaded with a require statement, anything in the mainline code of the loaded module runs.

function checkModule07 (confMessage) {

    console.log(`Module 07-mind-grenade.js successfully ${confMessage}`);

}

checkModule07 ("loaded");