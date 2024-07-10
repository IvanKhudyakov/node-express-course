//It should create a read stream for the big file (../content/big.txt) with encoding of "utf8" and a highWaterMark of 200. 
//The highWaterMark is the maximum amount of bytes that node will read with each chunk of the stream. 
//The program should initialize a counter to 0. Then it should handle the “data” event for the stream by incrementing the counter and logging the event result to the screen.
//Then it should handle the “end” event by reporting the number of chunks received. 
//Finally, it should handle the stream “error” event by logging the error to the console. 
//Test the program for several values of highWaterMark. You can look at 01-node-tutorial/16-streams.js file to help you as needed.

//require
const {createReadStream} = require('fs');
const stream = createReadStream('../content/big.txt', {highWaterMark: 200, encoding : 'utf-8'});
let counter = 0;

//data
stream.on("data", (result) => {
    counter += 1;
    console.log("BTW the current read is: ", result);
})

//end
stream.on("end", () => {
    console.log(`The number of chunks is ${counter}`);
})

//error
stream.on("error", (error) => {
    console.log(`Error is: ${error.message}`);
})