const express = require('express');
const Portfolio = require('../schemas/portfolio');

const router = express.Router();
router.route('/portfolio')
    .get(async (req, res, next) => {
        try {
            const portfolio = await Portfolio.find();
            res.json(portfolio);
        } catch (err) {
            console.error(err);
            next(err);
        }
    })
    .post(async (req, res, next) => {
        try {
            const portfolio = await Portfolio.create({
                title: req.body.title,
                content: req.body.content,
                link: req.body.link,
                img: req.body.img,
                createAt: req.body.createAt
            });
            console.log(portfolio);
            res.status(200).json(portfolio);
        } catch (err) {
            console.error(err);
            next(err);
        }
    });

    module.exports = router