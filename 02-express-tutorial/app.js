const express = require('express');
const app = express();
const peopleRouter = require('./routes/people');
const authRouter = require('./routes/auth');

//middleware
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(`user requested ${url} via methond ${method} in ${time} year.`);
    next();
}

app.use([logger, express.static('./methods-public'), express.urlencoded({extended:false}), express.json()]);

app.use('/api/v1/people', peopleRouter);
app.use('/login', authRouter);

// //APIs
app.get("/about", (req, res) => {
    res.send("About page");
})
//html form post


app.listen(3000, () => {
    console.log('listening on port 3000...');
})