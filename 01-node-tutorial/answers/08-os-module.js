//This should load the built-in os Node module and display some interesting information from the resulting object. As for all modules, you load a reference to it with a require statement, in this case
//const os = require("os");
const os = require("os");

function convertTime (timeInSec) {

    hours = Math.floor (timeInSec / 3600);
    minutes = Math.floor ((timeInSec -3600*hours)/60);
    seconds = timeInSec -3600*hours - 60* minutes;
    if (hours >23) {
        days = Math.floor (hours / 24);
        hours = hours - days*24;
        return `${days}D, ${hours} hours, ${minutes} mins and ${seconds} sec.`;
    } else {
        return `${hours} hours, ${minutes} mins and ${seconds} sec.`;
    }
}
const hostname = os.hostname();
const version = os.version();
const username = os.userInfo().username;

console.log(`Dear ${username}. The laptop with host name ${hostname} and OS version ${version} uptime is`, convertTime(os.uptime()));
