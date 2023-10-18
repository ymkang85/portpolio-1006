const express = require('express');
const Portfolio = require('../schemas/portfolio');
const upload = require('../upload');

const router = express.Router();

router.route('/list/:category')
   .get(async (req, res, next) => {
      try {
         const category = req.params.category;
         const portfolio = await Portfolio.find({ category: category });
         res.status(201).json(portfolio);
      } catch (err) {
         console.log(err);
         next(err);
      }
   });
   
router.route('/list')
    .get(async (req, res, next) => {
        try {
            const row = await Portfolio.find({});
            res.render('portfolio', { row });
        } catch (err) {
            console.error(err);
            next(err);
        }
    });
    
router.route('/write')
    .get((req, res, next) => {
        res.render('portfolio_write');
    })
    .post(upload.array("img"), async (req, res, next) => {
        try {
            let fileupload = '';
            if (!req.files || req.files.length == 0) {
                fileupload = '';
            } else {
                fileupload = {
                    orimg: req.files.map(file => file.originalname),
                    img: req.files.map(file => file.filename)
                }
            }
            const portfolio = await Portfolio.create({
                category: req.body.category,
                title: req.body.title,
                content: req.body.content,
                orimg: req.files.map(file => file.originalname),
                img: req.files.map(file => file.filename)
            });
            console.log(portfolio);
            res.redirect('/portfolio/list');
        } catch (err) {
            console.error(err);
            next(err);
        }
    });
// .route('/update/:id')
// .route('/delete/:id')

module.exports = router