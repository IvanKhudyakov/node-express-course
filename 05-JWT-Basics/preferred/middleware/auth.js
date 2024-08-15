const jwt = require('jsonwebtoken');
const {UnauthenicatedError} = require('../errors');

const authMiddleware = async(req,res,next) => {
    //get token
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthenicatedError('Token is not provided');
    }
    const token = authHeader.split(' ')[1];

    //authorize
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const {id, username} = decoded;
        req.user = {id, username};
        next();
    } catch (error) {
        throw new UnauthenicatedError('User is not authorized to access this route');
    }

}

module.exports = authMiddleware;