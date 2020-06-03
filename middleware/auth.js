const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
    //get token from header
    const token = req.header('x-auth-token');

    //Check if no token
    if(!token) {
        return res.status(401).json({ msg: 'No token, authorization denied'});
    }
    
    // Verify token > decoded by jwt to get users profile OR error
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret')); //decodes token

        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' })
    }
};


