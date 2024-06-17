//10-fs-sync.js: This should load writeFileSync and readFileSync functions from the fs module. 
//Then you will use writeFileSync to write 3 lines to a file, ./temporary/fileA.txt, using the "append" flag for each line after the first one. 
//Then use readFileSync to read the file, and log the contents to the console. Be sure you create the file in the temporary directory. 
//That will ensure that it isn’t pushed to Github when you submit your answers (because that file has been added to the .gitignore file for you already which tells git not to look at those files).
const { writeFileSync, readFileSync, existsSync, mkdirSync } = require('node:fs');
const path = require('node:path');
const filename = "fileA.txt";
const directory = "./temporary";
console.log("New file to be created in:", path.join(directory, filename));
//create directory if doesn't exist since writeFileSync doesn't create any folder
if (!existsSync(directory)) {

    mkdirSync(directory);
}

//write first line (and overwrite the file)
writeFileSync(
    path.join(directory, filename), 
    "First line\n"
);
//write second and third lines (and append the conten)
writeFileSync(
    path.join(directory, filename), 
    "Second line \nThird Line",
    {flag: "a"}
);


//open for read
let content = readFileSync(path.join(directory, filename), "utf8");

//print the content
console.log("File content is:\n", content);