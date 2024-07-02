const { writeFile, readFile } = require("fs").promises;  
const filename = "temp.txt";
//You start it the same way, but this time, you use the .then style of asynchronous programming. 
//You don’t need to create any functions. Instead, you just use cascading .then statements in your mainline, like this:
writeFile(filename, "Line #1") // write line 1  
.then(() => {  
   return writeFile(filename, "\nline #2", {flag: 'a'})
// write line 2.  
// Return the promise so you can chain the .then statements  
})  
.then(()=> {
    return writeFile(filename, "\nline #3", {flag: 'a'})
}
)
.then (()=> {
    let content = readFile(filename, {encoding: 'utf-8'});
    return content;
})
.then ((content)=> {
    // console.log("output then");
    console.log(content);
})
// write the third line, and follow that with two more .then blocks,  
// one to call readFile to read it back out, and one to log the data to the screen.   
.catch((error) => {  
    console.log("An error occurred: ", error.message);
})
