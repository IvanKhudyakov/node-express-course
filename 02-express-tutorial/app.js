const express = require('express');
const app = express();
const peopleRouter = require('./routes/people');
const authRouter = require('./routes/auth');
const cookieParser = require('cookie-parser');

//middleware
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(`user requested ${url} via methond ${method} in ${time} year.`);
    next();
}

app.use([logger, express.static('./methods-public'), express.urlencoded({extended:false}), express.json()]);
app.use(cookieParser());

app.use('/api/v1/people', peopleRouter);
app.use('/login', authRouter);

//APIs
app.get("/about", (req, res) => {
    res.send("About page");
})



//Optional Additional Assignment
//Now write a middleware function called auth. This checks for req.cookies.name. If that cookie is present, it sets req.user to the value, and calls next. 
//If it is absent, it sets the res status to 401 (which means unauthorized), and returns a message in a JSON object that says “unauthorized”. It does not call next() in this case.  
const auth = (req, res, next) => {
    const userName = req.cookies.name;
    if (!userName) {
        return res.status(401).json({success: false, msg: "You're unauthorized to access!"});
    }
    req.user = userName;
    next();
}

//Now add an app.post("/logon"), which should require a name in the body. 
//If it is present, it should do a res.cookie("name", req.body.name), and send back a 201 result code plus a message that says hello to the user. 
//If name is not present, it should return a 400 and an error message in JSON. 
app.post("/logon", (req,res) => {
    const {name} = req.body;
    if (!name) {
        return res.status(400).json({success: false, msg: "Name has not been provided!"});
    }
    res.cookie("name", name);
    res.status(201).json({success: true, data: `User ${name} is authorized! Welcome!`});
})

//Now add an app.delete("/logoff"). This should do a res.clearCookie("name"), and then it should return a 200, with a message in JSON that the user is logged off. 
app.delete("/logoff", (req, res) => {
    const {name} = req.cookies;
    res.clearCookie("name");
    res.status(200).json({success: true, data: `User ${name} is logged off!`});
})

//Now add an app.get("/test"). The auth middleware should be invoked in this app.get statement. 
//The get should just return a 200, plus a message in JSON that says welcome to the user, whose name is in req.user.
app.get("/test", auth, (req, res) => {
    const username = req.user;
    console.log("I'm in test");
    res.status(200).json({success:true, data:`Welcome user ${username}`});
})

app.listen(3000, () => {
    console.log('listening on port 3000...');
})