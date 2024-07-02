const { writeFile, readFile } = require("fs").promises;  
const filename = "temp.txt";
//Then create an async function called writer that takes 0 arguments, and that writes three lines to a file named temp.txt, 
//by calling the writeFile function with await. 
//The Promise version of writeFile takes the same arguments as the one you used in last week’s exercise 10-fs-sync 
//but will return a Promise instead of a result directly.

//console.log("The result of the function should be Promise: ", writeFile(filename, "TEST"));
const writer = async (filename) => {
    try{
        await writeFile(filename, "Line # 1");
        await writeFile(filename, '\nLine # 2', {flag : 'a'});
        await writeFile(filename, '\nLine # 3', {flag : 'a'});
    } 
    catch(error) {
        console.log("Error message: ", error.message);
    }
}

//Create another async function called reader that reads the file with await readFile and logs the return value to the screen.
const reader = async (filename) => {
    console.log(await readFile(filename, {encoding:'utf-8'}));
}
//you write a third async function called readWrite. In that function, you call await reader and await writer. 
const readWrite = async (filename) => {
    await writer(filename);
    await reader(filename);
}
//Finally, write a line at the bottom of the file that calls the readWrite function. 
readWrite(filename);