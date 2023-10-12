const express = require('express');
const Myinfo = require('../schemas/myinfo');

const router = express.Router();
router.route('/myinfo')
    .get(async (req, res, next) => {
        try {
            const myinfo = await Myinfo.find();
            res.json(myinfo);
        } catch (err) {
            console.error(err);
            next(err);
        }
    })
    .post(async (req, res, next) => {
        try {
            const myinfo = await Myinfo.create({
                email: req.body.email,
                phone: req.body.email,
                name: req.body.name,
                emailjs_id: req.body.emailjs_id,
                emailjs_template_id: req.body.emailjs_template_id,
                emailjs_api: req.body.emailjs_api
            });
            console.log(myinfo);
            res.status(200).json(myinfo);
        } catch (err) {
            console.error(err);
            next(err);
        }
    });

    module.exports = router