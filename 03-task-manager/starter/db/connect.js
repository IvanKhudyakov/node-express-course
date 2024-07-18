const mongoose = require('mongoose')

//const connectionString = 'mongodb+srv://<user>:<pwd>@<host>/<DB>?retryWrites=true&w=majority&appName=<appname>'

const connectDB = (url) => {
    return mongoose
        .connect(url, {useNewUrlParser:true, useCreateIndex: true, useFindAndModify:false, useUnifiedTopology:true});
        // .then(() =>{console.log('CONNECTED TO THE DB ...');})
        // .catch((error) => {console.log(error);})

}

module.exports = {connectDB}