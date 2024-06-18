// 11-fs-async.js: This should load the fs module, and use the asynchronous function writeFile to write 3 lines to a file, ./temporary/fileB.txt. 
// Now, be careful here! This is our first use of asynchronous functions in this class, but we are going to use them a lot! 
// First, you need to use the "append" flag for all but the first line. Second, each time you write a line to the file, you need to have a callback, because the writeFile operation is asynchronous. 
// Third, for each line you write, you need to do the write for the line that follows it within the callback - otherwise the operations won’t happen in order. 
// Put console.log statements at various points in your code to tell you when each step completes. Then run the code. 
// Do the console log statements appear in the order you expect? Run the program several times and verify that the file is created correctly. Here is how you might start:
// const { writeFile } = require("fs");
// console.log("at start");
// writeFile("./temporary/output.txt", "This is line 1\n", (err, result) => {
//   console.log("at point 1");
//   if (err) {
//     console.log("This error happened: ", err);
//   } else {
//     // here you write your next line
//   }
// });
// console.log("at end");
// To get the lines to be written in order, you end up with a long chain of callbacks, which is called “callback hell”. We’ll learn a better way to do this soon.

const { writeFile, existsSync, mkdirSync } = require('node:fs');
const path = require('node:path');
const filename = "fileB.txt";
const directory = "./temporary";
const fullpath = path.join(directory, filename);
console.log("New file to be created in:", fullpath);
//create directory if doesn't exist since writeFileSync doesn't create any folder
if (!existsSync(directory)) {

    mkdirSync(directory);
}

// console.log("at start");

writeFile(fullpath, "This is line 1\n", (err, result) => {
//   console.log("Begin adding line 1");
  if (err) {
    console.log("This error happened: ", err);
  } else {
    writeFile(fullpath, "This is line 2\n", {flag: "a"}, (err, result) => {
        // console.log("Begin adding line 2");
        if (err) {
          console.log("This error happened: ", err);
        } else {
            writeFile(fullpath, "This is line 3\n", {flag: "a"}, (err, result) => {
                // console.log("Begin adding line 3");
                if (err) {
                  console.log("This error happened: ", err);
                } else {
                    // console.log("line 3 is added");
                }
            })
            // console.log("line 2 is added");
        }
    });
    // console.log("line 1 is added");
  }
});

