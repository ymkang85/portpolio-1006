const express = require('express');
const Category = require('../schemas/category');
const Portfolio = require('../schemas/portfolio');
const upload = require('../upload');
const fs = require('fs-extra');

const router = express.Router();
router.route('/list')
   .get(async (req, res, next) => {
      try {
         let show = '';
         show = req.query;
         let maxNum = 0;
         const row = await Portfolio.find({});
         const rs = await Category.find().sort({ "num": "asc" });
         if (rs.length > 0) maxNum = rs[0].num;
         res.render('portfolio', { row, rs, maxNum, show, title: "나의 포트폴리오" });
      } catch (err) {
         console.error(err);
         next(err);
      }
   });

router.route('/write')
   .get(async (req, res, next) => {
      try {
         const row = await Category.find().sot({ "num": "desc" });
         res.render('portfolio_write', { title: "포트폴리오", row });
      } catch (err) {
         console.error(err);
         next(err);
      }
   });

router.route('/category/write')
   .post(async (req, res) => {
      try {
         const addCategory = await Category.create({
            name: req.body.category,
            num: req.body.num
         });
         res.send('1');
      } catch (err) {
         console.error(err);
         res.send('0');
      }
   });

router.route('/category/update')
   .post(async (req, res) => {
      try {
         // 배열을 역순으로 바꾸어야 함.
         let cate = req.body.category.reverse();

         let num, name;

         for (i = 0; i < cate.length; i++) {
            cate = cate[i];
            num = i + 1;
            await Category.updateMany([
               { num: num },
               { name: name }
            ]);
         }
         res.send('1');
      } catch (err) {
         console.error(err);
         res.send('0');
      }
   });

router.route('/category/del')
   .post(async (req, res, next) => {
      try {
         var id = req.body.id;
         await Category.deleteOne({ _id: id });
         res.send('1');
      } catch (err) {
         console.error(err);
         res.send('0');
         next(err);
      }
   });

module.exports = router;