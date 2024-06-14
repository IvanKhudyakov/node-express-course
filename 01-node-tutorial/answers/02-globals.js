//02-globals.js: This program should use the console.log function to write some globals to the screen. 
//Set an environment variable with the following command in your command line terminal: export MY_VAR="Hi there!" 
//The program should then use console.log to print out the values of __dirname (a Node global variable) and process.env.MY_VAR (process is also a global, and contains the environment variables you set in your terminal.) 
//You could print out other globals as well (Node documentation on available globals). For each of these programs, you invoke them with node to make sure they work. 

//env to list all env variables

console.log("---");
console.log(`__dirname value is ${__dirname}, you're located in ${process.env.PWD}`);
console.log("---");
console.log(`The new global env variable set by ${process.env.USER} is ${process.env.MY_VAR}`);
console.log("---");