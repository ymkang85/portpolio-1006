const express = require('express');
const Timeline = require('../schemas/timeline');

const router = express.Router();
router.route('/timeline')
    .get(async (req, res, next) => {
        try {
            const timeline = await Timeline.find();
            res.json(timeline);
        } catch (err) {
            console.error(err);
            next(err);
        }
    })
    .post(async (req, res, next) => {
        try {
            const timeline = await Timeline.create({
                jobtitle: req.body.jobtitle,
                where: req.body.where,
                wdate: req.body.wdate,
                createAt: req.body.createAt
            });
            console.log(timeline);
            res.status(200).json(timeline);
        } catch (err) {
            console.error(err);
            next(err);
        }
    });

    module.exports = router