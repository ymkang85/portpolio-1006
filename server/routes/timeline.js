const express = require('express');
const Timeline = require('../schemas/timeline');
const upload = require('../upload');

const router = express.Router();

router
    .route('/list')
    .get(async (req, res, next) => {
        try {
            const row = await Timeline.find({});
            res.render('timeline', { row });
        } catch (err) {
            console.error(err);
            next(err);
        }
    });
    // .route('/write')
    // .route('/update/:id')
    // .route('/delete/:id')

    module.exports = router