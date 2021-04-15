'use strict'
const jwt = require('jsonwebtoken');
const global = require('../config');

// token generator
exports.generateToken = async (data) => {
    return jwt.sign(data, global.SALT_KEY, { expiresIn: '1d'});
}

// token decoder
exports.decodeToken = async (token) => {
    const data = await jwt.verify(token, global.SALT_KEY)
    return data
}

// token interceptor
exports.authorize = function (req, res, next) {
    const token = req.headers['x-access-token']

    if(!token){
        res.status(401).json({
            message: 'Access denied'
        })
    } else {
        jwt.verify(token, global.SALT_KEY, function (error,decoded) {
            if (error) {
                res.status(401).json({
                    message: 'Invalid token'
                })
            } else {
                next()
            }
        })
    }
}