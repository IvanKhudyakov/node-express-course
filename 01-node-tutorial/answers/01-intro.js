//01-intro.js: This program should use the console.log function to write something to the screen. 
//While you are in the “answers” directory, run the command, node 01-intro.js, to verify that the program runs. 
//You can also put additional JavaScript logic in your program.


console.log("Something on the screen");

const now = new Date();
const day = now.getDay();
const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", ""]
console.log("Today is " + week[day] + ", " + now.toLocaleDateString() + "; now it's " + now.toLocaleTimeString());
