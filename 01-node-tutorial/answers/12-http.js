// 12-http.js. This program should use the built-in http module to create a simple web server that listens on port 3000. This is done with the createServer function. 
// You pass it a callback function that checks the request variable (req) for the current url property, and depending on what the URL is, sends back a message to the browser screen. 
// Then have your code listen on port 3000, run this file with the node command, and test it from your browser, by navigating to http://localhost:3000. 
// You can look at 12-http.js for the instructor’s answer (except that program listens on 5000). You will need to type in Ctrl+c (the Ctrl key plus the letter “C” at the same time; or for Mac the Cmd key plus the letter “C” at the same time) to exit your program.
// Within your “answers” directory is a program called prompter.js. This is a program for a simple server. Try it out! It will display a form in the browser when you run the file and navigate to http://localhost:3000. 
// Then, when the user submits the form, it echoes back what was submitted, and displays the form again. You don’t have to worry about how it works. 
// There is a simple body parser to read any values submitted with the form, and that parser returns a hash with the name and value of each. Because the parser is asynchronous, you get back the hash in a callback.
// Now, your task is to change this program so that it does something interesting! First, you can change the variables that you want to store when you get the form back. 
// Then, you can change the form itself to return the values you want from the user, which you store in those variables. Then, you can use string interpolation to insert the values of your variables into the HTML. 
// Finally, you change the logic that handles the hash of values you get when the user submits the form, so that you save the values the user submits. The places you would change are marked in the code.
// For example, you could change the input field to be a dropdown with various colors, and you could set the background color of the body to be what the user chooses. 
// Or, you could make a number guessing game: Start with a random number from 1 to 100, let the user guess, and tell the user if their guess is low or high. 
// In this case, you’d change the input field so that it accepts only numeric input (but when it is returned in the hash, it will be a string, so you’d have to convert it.)
const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/CTD') {
        res.end(`
            <p style="font-size: 20px;">Voila! You have requested a secret URL.</p>
            <img src='https://classes.codethedream.org/img/logo/learns-dark.png'>
            <br/><a href="/">Back to home page</a>
            `
        );
        // console.log("requested /CTD");
    } else if (req.url === '/') {
        res.end('<h1>Home Page!</h1>');
        // console.log("requested root url");
    } else {
        res.end(`
            <h1>ERROR!</h1>
             <p>You are requesting unknown URL</p>
             <a href="/">Back to home page</a>
             `
            );
    }
  }
)

server.listen(3000);