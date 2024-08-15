const jwt = require('jsonwebtoken');
const { BadRequestError } = require('../errors');

const login = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        throw new BadRequestError('Please provide username and password!');
    }
    //generate fake id since we don't use DB
    const id = new Date().getDate();
    //console.log(username, password);
    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '24h' });
    // console.log(token);
    res.status(200).json({ msg: 'user created', token });
    //res.send('Fake Login/Register/Signup Route!');
}

const hello = async (req, res) => {

    //generate the message
    const helloMessages = ["Hello", "Hola", "Bonjour", "Hallo", "Ciao", "Привет", "Olá"]; //7 options
    const helloId = Math.floor(Math.random() * helloMessages.length);
    const message = `${helloMessages[helloId]}, ${req.user.username}`;

    res.status(200).json({ msg: `${message}`, secret: `Here is your authorized data: ${helloId}` });
}

module.exports = { login, hello };