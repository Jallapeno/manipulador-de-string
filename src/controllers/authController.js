'use strict'
const bcrypt = require("bcrypt")
const global = require('../config');
const saltRounds = global.SALT_KEY;
const authService = require('../services/authService');

module.exports = {
    async authenticate(req, res, next) {
        try {
            const hash = bcrypt.hashSync( 'authentication ok' , saltRounds);
            const token = await authService.generateToken({
                hash: hash
            });
            return res.status(201).send({
                token: token
            });
        } catch (error) {
            next(error);
        }
    },
}