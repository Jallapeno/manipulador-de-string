'use strict'
const express = require('express')
const routes = express.Router()
const textController = require('./controllers/textController');
const authController = require('./controllers/authController');
const authService = require('./services/authService');

routes.get('/', textController.index);
// auth route
routes.get('/authenticate', authController.authenticate);
// app routes
routes.post('/counter/:type', authService.authorize, textController.counter); // types: words and sentences
routes.post('/reverse', authService.authorize, textController.reverse);
routes.post('/apart', authService.authorize, textController.textApart);
routes.post('/outshine', authService.authorize, textController.textOut);

module.exports = routes