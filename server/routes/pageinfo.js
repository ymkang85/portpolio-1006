const express = require('express');
const multer = require('multer');
const upload = require('../upload');

const Pageinfo = require('../schemas/pageinfo');

const router = express.Router();

router.route('/list/:pagename')
    .get(async (req, res, next) => {
        try {
            const pagename = req.params.pagename;
            const pageinfo = await Pageinfo.find({pagename : pagename});
            res.status(201).json(pageinfo);
        } catch (err) {
            console.error(err);
            next(err);
        }
    });

router.route('/write', upload.single('img'))
    .post(async (req, res, next) => {
        try {
            console.log(req.body, req.files);
            const pageinfo = await Pageinfo.create({
                pagename: req.body.pagename,
                title: req.body.title,
                content: req.body.content,
                animated: req.body.animated,
                img: req.body.img
            });
            console.log(pageinfo);
            res.status(200).json(pageinfo);
        } catch (err) {
            console.error(err);
            next(err);
        }
    });

router.route('/update')
    .post(async (req, res, next) => {
        try {
            const pageinfo = await Pageinfo.updateOne({
                _id: req.body.id
            },{
                email: req.body.email,
                phone: req.body.phone,
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

router.route('/list')
    .get(async (req, res, next) => {
        try {
            const row = await Pageinfo.find({});
            res.render('pageinfo', { row });
        } catch (err) {
            console.error(err);
            next(err);
        }
    });

    module.exports = router