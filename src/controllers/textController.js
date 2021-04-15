'use strict'
const repository = require('../repositories/textRepository');

module.exports = {
    async index(req, res, next) {
        try {
            res.status(200).send({ 
                title: "Bem vindo servidor de aplicações!",
                version: "1.0.0"
            });
        } catch (error) {
            next(error);
        }
    },
    async counter(req, res, next) {
        try {
            let type = req.params.type;
            let enterText = req.body.text;

            if(type === 'words') {
                const sendText = await repository.counterWord(enterText);
                res.status(200).send(sendText);
            } else if(type === 'sentences') {
                const sendText = await repository.counterSentences(enterText);
                res.status(200).send(sendText);
            } else {
                res.status(404).send({
                    message: 'Not found :('
                });
                return
            }
        } catch (error) {
            next(error);
        }
    },
    async reverse(req, res, next) {
        try {
            let enterText = req.body.text;
            const sendText = await repository.textReverse(enterText);
            res.status(200).send(sendText);
        } catch (error) {
            next(error);
        }
    },
    async textApart(req, res, next) {
        try {
            let enterText = req.body.text;
            let enterSize = req.body.size;
            const sendText = await repository.textApart(enterText, enterSize);
            res.status(200).send(sendText);
        } catch (error) {
            next(error);
        }
    },
    async textOut(req, res, next) {
        try {
            let enterText = req.body.text;
            let enterWords = req.body.wordlist;
            const sendText = await repository.textOut(enterText, enterWords);
            res.status(200).send(sendText);
        } catch (error) {
            next(error);
        }
    }
}