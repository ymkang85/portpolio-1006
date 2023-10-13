const express = require('express');
const Pageinfo = require('../schemas/pageinfo');

const router = express.Router();
router.route('/pageinfo')
    .get(async (req, res, next) => {
        try {
            const pageinfo = await Pageinfo.find();
            res.json(pageinfo);
        } catch (err) {
            console.error(err);
            next(err);
        }
    })
    .post(async (req, res, next) => {
        try {
            const pageinfo = await Pageinfo.create({
                title: req.body.title,
                content: req.body.content,
                animated: req.body.animated,
                link: req.body.link,
                img: req.body.img,
                createAt: req.body.createAt
            });
            console.log(pageinfo);
            res.status(200).json(pageinfo);
        } catch (err) {
            console.error(err);
            next(err);
        }
    });

    module.exports = router